const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s+/)
  .map((el) => Number(el));

const n = input.shift();
const arr = input.map((value, idx) => ({ value, idx }));
arr.sort((a, b) => a.value - b.value);

let maxShift = 0;

for (let i = 0; i < n; i++) {
  const shift = arr[i].idx - i;
  if (shift > maxShift) {
    maxShift = shift;
  }
}

console.log(maxShift);
