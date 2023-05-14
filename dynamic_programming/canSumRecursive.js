const canSum = (targetSum, numbers) => {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let number of numbers) {
    const remainder = targetSum - number;
    if (canSum(remainder, numbers) === true) {
      return true;
    }
  }

  return false;
};

console.log(canSum(7, [2, 3, 4, 5]));
console.log(canSum(7, [2, 4]));
console.log(canSum(3000, [7, 14]));
