/**
 * 1주차 - 정렬
 * 해당 코드는 시간 초과로 틀렸습니다.
 * 이중 for문이 아닌 다른 정렬 방법을 찾아야 합니다.
 * 코드 추후 수정 예정
 */
const fs = require('fs');
const input = `5
30 10 44 27 49`.trim().split('\n');
//디버깅을 위해 input값 수정, 백준에는 아래 코드 사용
//fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const A = input[1].split(' ').map(Number);

//const sorted = [...A].sort((a, b) => a - b);

function solution(N, A) {
  let ans = 0;
  for (let i = 0; i < N; i++ ) {
    let flag = 0;
    for (let j = 0; j < N - 1; j++ ) {
        if (A[j] > A[j + 1]) {
            flag = 1;
            temp = A[j];
            A[j] = A[j + 1];
            A[j + 1] = temp;
        }
    }
    if (flag === 0) {
      ans = i;
      break;
    }
  }
console.log(ans);
}

solution(N, A);