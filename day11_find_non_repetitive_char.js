const findFirstNonRep = (str) => {
    let charCount = {}
    const lowerStr = str.toLowerCase();
    for (let char of lowerStr) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let char of lowerStr) {
        if (charCount[char] === 1) {
            return char; 
        }
    }

    return "No unique characters found";
}

console.log(findFirstNonRep("rishabh"));