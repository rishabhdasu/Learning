const isAanagram = (str1, str2) => {
    if(str1.length !== str2.length) return false;
    const arr1 = str1.toLowerCase().split("").sort().join("");
    const arr2 = str2.toLowerCase().split("").sort().join("");
    return arr1 === arr2;
}

console.log(isAanagram("CAT", "ACT"));