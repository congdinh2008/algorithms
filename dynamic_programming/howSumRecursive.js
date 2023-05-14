const bestSum = (targetSum, numbers) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let number of numbers) {
    const remainder = targetSum - number;
    const remainderResult = bestSum(remainder, numbers);
    if (remainderResult !== null) {
      return [...remainderResult, number];
    }
  }

  return null;
};

console.log(bestSum(7, [2, 3, 4, 5]));
console.log(bestSum(7, [2, 4]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(300, [7, 14]));
