const arr = ["Tesla", "Kia", "Tata", "Kia", "Mahindra", "Tesla", "Hyundai"];

const cleanArr = [];
let seen = {};

arr.forEach((elem) => {
  if (!seen[elem]) {
    cleanArr.push(elem);
    seen[elem] = true;
  }
});

console.log(cleanArr);
