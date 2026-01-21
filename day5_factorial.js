const findFactorial = (num) => {
  if (num < 0) return "Invalid Input";
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

console.log(findFactorial(6));

// Using While Loop
function factorialWhile(n) {
  if (n === 0 || n === 1) return 1;
  let result = 1;
  while (n > 1) {
    result *= n;
    n--;
  }
  return result;
}

// Using recurssion
function factorialRecursive(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorialRecursive(n - 1);
}
