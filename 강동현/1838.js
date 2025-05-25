const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s+/)
  .map((el) => Number(el));

const n = input.shift();

for (i = 0; i < n - 1; i++) {
  flag = 0;
  for (j = 0; j < n - i - 1; j++) {
    if (input[j] > input[j + 1]) {
      flag = 1;
      temp = input[j];
      input[j] = input[j + 1];
      input[j + 1] = temp;
    }
  }
  if (flag == 0) {
    break;
  }
}

console.log(i);

//시간초과