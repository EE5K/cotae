const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [row, col, rectCount] = input[0].split(" ").map(Number);

// 도화지 만들기 (0으로 시작, 색칠된 부분은 나중에 막기)
const map = Array.from({ length: row }, () => Array(col).fill(0));

// 직사각형 정보 읽고 해당 영역을 1로 막기
for (let i = 1; i <= rectCount; i++) {
  const [x1, y1, x2, y2] = input[i].split(" ").map(Number);

  for (let y = y1; y < y2; y++) {
    for (let x = x1; x < x2; x++) {
      map[y][x] = 1; // 막힌 곳 표시
    }
  }
}

// DFS로 주변을 탐색해서 넓이를 구할 함수
function countArea(y, x) {
  let size = 1;
  map[y][x] = 1; // 방문 표시 (더 이상 가지 않도록)

  const moves = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0], // 오른쪽, 아래, 왼쪽, 위
  ];

  for (let [dy, dx] of moves) {
    const ny = y + dy;
    const nx = x + dx;

    if (ny >= 0 && ny < row && nx >= 0 && nx < col && map[ny][nx] === 0) {
      size += countArea(ny, nx);
    }
  }

  return size;
}

const result = [];

for (let y = 0; y < row; y++) {
  for (let x = 0; x < col; x++) {
    if (map[y][x] === 0) {
      const area = countArea(y, x);
      result.push(area);
    }
  }
}

result.sort((a, b) => a - b);
console.log(result.length);
console.log(result.join(" "));
