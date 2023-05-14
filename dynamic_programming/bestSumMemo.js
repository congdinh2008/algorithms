const bestSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;

  for (let number of numbers) {
    const remainder = targetSum - number;
    const remainderResult = bestSum(remainder, numbers, memo);
    if (remainderResult !== null) {
      const combination = [...remainderResult, number];
      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
      }
    }
  }

  memo[targetSum] = shortestCombination;
  return shortestCombination;
};

console.log(bestSum(7, [2, 3, 4, 5]));
console.log(bestSum(7, [2, 4]));
console.log(bestSum(7, [2, 3, 4, 7]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(300, [7, 14]));
