const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 입력 받기
const [M, N, K] = input[0].split(' ').map(Number);

// x 행 ( 가로줄 ? ) y 열 ( 세로줄 ? ) map을 N x M으로 
// map[x][y]로 접근하려면 map[N][M] 크기여야 함
const map = Array.from({ length: N }, () => new Array(M).fill(0));

// K개의 직사각형 칠하기
for (let i = 1; i <= K; i++) {
    const rect = input[i].split(' ').map(Number);
    const x1 = rect[0];
    const y1 = rect[1];
    const x2 = rect[2];
    const y2 = rect[3];
    
    // 직사각형 영역을 1로 표시
    for (let x = x1; x < x2; x++) {
        for (let y = y1; y < y2; y++) {
            map[x][y] = 1;  // 직사각형이 있는 곳
        }
    }
}

// BFS로 영역 개수와 넓이 구하기
const dx = [0, 0, 1, -1];  // 상하좌우
const dy = [1, -1, 0, 0];

const areas = [];  // 각 영역의 넓이를 저장할 배열

// 모든 좌표를 확인하면서 새로운 영역 찾기
for (let x = 0; x < N; x++) {
    for (let y = 0; y < M; y++) {
        // 빈 공간(0)을 찾으면 BFS 시작
        if (map[x][y] === 0) {
            let area = 0;  // 현재 영역의 넓이
            const queue = [];
            queue.push([x, y]);
            map[x][y] = 1;  // 방문 처리 (다시 안 오도록)
            
            // BFS
            while (queue.length > 0) {
                const current = queue.shift();
                const curX = current[0];
                const curY = current[1];
                area++;  // 현재 칸도 넓이에 포함
                
                // 4방향 확인
                for (let dir = 0; dir < 4; dir++) {
                    const nextX = curX + dx[dir];
                    const nextY = curY + dy[dir];
                    
                    // 범위 체크
                    if (nextX >= 0 && nextX < N && nextY >= 0 && nextY < M) {
                        // 아직 방문 안 한 빈 공간이면
                        if (map[nextX][nextY] === 0) {
                            map[nextX][nextY] = 1;  // 방문 처리
                            queue.push([nextX, nextY]);
                        }
                    }
                }
            }
            
            // 영역 하나 찾기 완료
            areas.push(area);
        }
    }
}

// 출력
console.log(areas.length);  // 영역 개수

// 오름차순 정렬해서 출력
areas.sort(function(a, b) {
    return a - b;
});
console.log(areas.join(' '));
