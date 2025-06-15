const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .map((el) => Number(el));

const n = input.shift();
const numOfmeet = [];

//회의실 이차원 배열을 만드는 구간
for (let i = 0; i < input.length; i += 2) {
  numOfmeet.push([input[i], input[i + 1]])
}

//회의실을 끝시간 순 정렬
//끝시간이 같은 경우 시작시간 순 정렬
numOfmeet.sort((a, b) => {
  return a[1] - b[1] || a[0] - b[0];
});

let maxOfmeet = 0;
let curr = 0;

//끝시간을 기준으로 회의실을 배정합니다
for (let i = 0; i < numOfmeet.length; i++) {
  let start = numOfmeet[i][0]
  let end = numOfmeet[i][1]
  if (curr <= start) {
    curr = end;
    maxOfmeet++;
  }
}

console.log(maxOfmeet);
