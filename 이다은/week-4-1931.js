const fs = require('fs');
const input = `11
1 4
3 5
0 6
5 7
3 8
5 9
6 10
8 11
8 12
2 13
12 14`.trim().split('\n');
// 디버깅을 위해 input값 수정, 백준에는 아래 코드 사용
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 1. 회의 리스트 만들기
const N = Number(input[0]); // 회의 수
const meetings = input.slice(1).map(line => {
  const [start, end] = line.split(' ').map(Number);
  return [start, end];
});
// 2. 회의 시간 정렬(끝나는 시간을 기준으로)
meetings.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];// 끝나는 시간 같으면 시작 시간 빠른 순
  }
  return a[1] - b[1];// 끝나는 시간 빠른 순
});

//console.log(meetings); // 확인용

// 3. 회의 개수 세기
let count = 0; //선택한 회의 수
let lastEndTime = 0; // 마지막으로 선택한 회의의 끝나는 시간

for (const [start, end] of meetings) {
  if (start >= lastEndTime) {
    // 현재 회의의 시작 시간이 마지막으로 선택한 회의의 끝나는 시간보다 크거나 같으면
    // 회의를 선택할 수 있음
    count++;
    lastEndTime = end;
  }
}

console.log(count);