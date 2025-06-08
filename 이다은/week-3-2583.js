const fs = require('fs');
const input = `5 7 3
0 2 4 4
1 1 2 5
4 0 6 2`.trim().split('\n');
// 디버깅을 위해 input값 수정, 백준에는 아래 코드 사용
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 첫 줄
const [M, N, K] = input[0].split(' ').map(Number);

// 직사각형 좌표
const rects = input.slice(1).map(line => line.split(' ').map(Number));

// map 초기화
const map = Array.from({ length: M }, () => Array(N).fill(0));

for (let i = 0; i < K; i++) {
  const [x1, y1, x2, y2] = rects[i];

  for (let y = y1; y < y2; y++) {
    for (let x = x1; x < x2; x++) {
      map[y][x] = 1;  // 직사각형 부분을 1로 채움
    }
  }
}
//console.log(map);

const directions = [
  [0, 1],  
  [1, 0],  
  [0, -1],
  [-1, 0] 
];

function bfs(startY, startX) {
  let queue = [[startY, startX]];
  map[startY][startX] = 1; // 현재 위치 queue에 넣고 방문 처리
  let size = 1; 

  while (queue.length) { //큐가 비어있을 때 까지 반복
    const [y, x] = queue.shift(); //현재 위치 꺼내기

    for (const [dy, dx] of directions) {
      const ny = y + dy;
      const nx = x + dx;

      if ( //범위 조건 설정
        ny >= 0 && ny < M &&
        nx >= 0 && nx < N &&
        map[ny][nx] === 0
      ) {
        map[ny][nx] = 1; // 방문 처리
        queue.push([ny, nx]);
        size++;
      }
    }
  }

  return size;
}

const areas = [];

for (let y = 0; y < M; y++) {
  for (let x = 0; x < N; x++) {
    if (map[y][x] === 0) {
      const areaSize = bfs(y, x);
      areas.push(areaSize);
    }
  }
}

areas.sort((a, b) => a - b);
console.log(areas.length);
console.log(areas.join(' '));


