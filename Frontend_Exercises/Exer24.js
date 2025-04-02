function numberProcessing(...nums) {
  return nums
    .map((num) => num * 2)
    .filter((num) => num > 20)
    .reduce((total, num) => total + num);
}

const numbers = [1, 2, 3, 5, 12, 18, 19, 25, 27, 30, 31, 32];

console.log(numberProcessing(...numbers));
