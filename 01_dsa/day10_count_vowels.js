const countVowels = (str) => {
    const vowels = "aeiou"
    let count = 0;
    const lowerStr = str.toLowerCase();
    for(let char of lowerStr) {
        if(vowels.includes(char)) count++;
    }
    return count;
}

console.log(countVowels("Rishabh"));