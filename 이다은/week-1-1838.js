/**
 * 1주차 - 정렬
 * 코드 수정하였습니다.
 */
const fs = require('fs');
const input = `5
30 10 44 27 49`.trim().split('\n');
//디버깅을 위해 input값 수정, 백준에는 아래 코드 사용
//fs.readFileSync('/dev/stdin').toString().trim().split(/\s+/).map(Number);

const N = Number(input[0]); 
const A = input[1].split(' ').map(Number); 

//const sorted = [...A].sort((a, b) => a - b);

const arr = A.map((value, index) => ({ value, index }));
// 입력을 valeu + index로 묶기
arr.sort((a, b) => a.value - b.value);
// value 기준으로 정렬, 버블 정렬과 똑같은 오름차순 상태로 정렬

let maxShift = 0;

for (let i = 0; i < N; i++) {
  const shift = arr[i].index - i;
  //이 값이 원래보다 얼마나 뒤에 있었는지, 즉 몇 칸 앞으로 왔는지 계산
  if (shift > maxShift) {
    maxShift = shift;
  }
}

console.log(maxShift);
//정렬이 끝났을 때의 i 값