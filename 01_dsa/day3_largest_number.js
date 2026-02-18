// Find the largest number in an array

// Using reduce method
// function findLargest(arr) {
//   if (arr.length === 0) return null;
//   return arr.reduce((acc, cur) => (acc > cur ? acc : cur));
// }

// console.log(findLargest([7, 90, 16, 115, 23, 43, 13]));

// without reduce
function findLargest(arr) {
  if (arr.length === 0) return null;
  let num = arr[0];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > num) num = arr[i];
  }
  return num;
}

console.log(findLargest([7, 90, 16, 115, 23, 483, 13]));
