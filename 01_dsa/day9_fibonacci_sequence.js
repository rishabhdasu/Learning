const fibonacci = (n)=> {
    if(n <= 1) return n;
    const result = [0, 1];
    for(let i = 2; i < n; i++) {
        const sum = (result[i-1]) + (result[i-2]);
        result.push(sum);
    }
    return result;
}

console.log(fibonacci(5));