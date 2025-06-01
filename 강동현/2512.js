const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .map((v) => Number(v));

const n = input.shift();
const m = input.pop();

function binarySearch(arr, target) {
  let left = 0;
  let right = Math.max(...arr);
  let result = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let total = 0;
    for (let i = 0; i < n; i++) {
      if (arr[i] < mid) {
        total += arr[i]
      } else {
        total += mid;
      }
    }

    if (total <= target) {
      left = mid + 1;
      result = mid;
    } else {
      right = mid - 1;
    }
  }

  return result;
}

console.log(binarySearch(input, m))
