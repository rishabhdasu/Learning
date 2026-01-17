// Reverse a String

const str = "Javascript";

// Method #1 - Using Map and Push
const strArr = str.split("");
const newArr = [];

strArr.map((s, i) => {
  const revChar = strArr[strArr.length - 1 - i];
  newArr.push(revChar);
});

const revStr1 = newArr.join("");
console.log("revStr1:", revStr1);

// Method #2 - Using Split and Reverse
const revStr2 = str.split("").reverse().join("");
console.log("revStr2:", revStr2);

// Method #3 - Using Spread Operator and Reverse
const revStr3 = [...str].reverse().join("");
console.log("revStr3:", revStr3);

// Method #4 - Using Spread Operator and Reduce
const revStr4 = [...str].reduce((acc, cur) => cur + acc);
console.log("revStr4:", revStr4);

// Method #5 - Using Map and WithoutPush

const reversed = strArr.map((s, i) => {
  return strArr[strArr.length - 1 - i];
});

const revStr5 = reversed.join("");
console.log("revStr5:", revStr5);
