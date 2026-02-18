const arr = [1, 3, 5, 15, 7, 6, 10, 30, 44, 9, 20, 45, 0];
const fizzbuzz = (data) => {
    const result = [];
    for(let i =0; i <= data.length - 1; i++) {
         let num = data[i];
         if (num === 0) {
            result.push(`${num}: ZERO`);
            continue; 
        }
        if(arr[i] % 3 === 0 && arr[i] % 5 === 0) {
            result.push(`${arr[i]}: FIZZBUZZ`);
        } else if(arr[i] % 3 === 0) {
            result.push(`${arr[i]}: FIZZ`);
        } else if(arr[i] % 5 === 0) {
            result.push(`${arr[i]}: BUZZ`);
        } else {
            result.push(`${arr[i]}: NORMAL`);
            }
    }
    return result;
}

console.log(fizzbuzz(arr));