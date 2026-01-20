// Find the sum of even numbers

// Using forEach

function findEvenAndSum(arr) {
  let sum = 0;
  arr.forEach((num) => {
    if (num % 2 === 0) sum += num;
  });
  return sum;
}

findEvenAndSum([2, 3, 5, 8, 12]);

function findEvenAndSum(arr) {
  return arr.filter((num) => num % 2 === 0).reduce((acc, cur) => (acc += cur));
}

console.log(findEvenAndSum([2, 3, 5, 8, 12]));

// Using for loop
// function findEvenAndSum(arr) {
//   let sum = 0;
//   for (let i = 0; i <= arr.length - 1; i++) {
//     if (arr[i] % 2 === 0) sum += arr[i];
//   }
//   return sum;
// }

// findEvenAndSum([2, 3, 5, 8, 12]);

// If you use .map() but don't save the result to a new variable, you are creating a new array in memory and then immediately throwing it away. This is a waste of RAM.
// function findEvenAndSum(arr) {
//   let sum = 0;
//   arr.map((num) => {
//     if (num % 2 === 0) sum += num;
//   });
//   return sum;
// }

// findEvenAndSum([2, 3, 5, 8, 12]);
