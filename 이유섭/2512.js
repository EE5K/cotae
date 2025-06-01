const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const requestedBudgets = input[1].split(" ").map(Number);
const totalBudget = Number(input[2]);

// 요청 총합 계산
const totalRequested = requestedBudgets.reduce(
  (sum, budget) => sum + budget,
  0
);

// 요청 총합이 전체 예산 이하라면 최대 요청값 출력
if (totalRequested <= totalBudget) {
  console.log(Math.max(...requestedBudgets));
} else {
  // 이진 탐색으로 상한액 찾기
  function calculateMaxLimit(requestedBudgets, totalBudget) {
    let minLimit = 0;
    let maxLimit = Math.max(...requestedBudgets);
    let bestLimit = 0;

    while (minLimit <= maxLimit) {
      const currentLimit = Math.floor((minLimit + maxLimit) / 2);
      let budgetSum = 0;

      for (let budget of requestedBudgets) {
        budgetSum += budget > currentLimit ? currentLimit : budget;
      }

      if (budgetSum <= totalBudget) {
        bestLimit = currentLimit;
        minLimit = currentLimit + 1;
      } else {
        maxLimit = currentLimit - 1;
      }
    }

    return bestLimit;
  }

  console.log(calculateMaxLimit(requestedBudgets, totalBudget));
}
