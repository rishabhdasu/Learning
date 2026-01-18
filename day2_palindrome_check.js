// Palindrome Check with reverse

// function isPalindrome(str) {
//   const clean = str.toLowerCase();
//   const reversed = clean.split("").reverse().join("");
//   return clean === reversed;
// }

// console.log(isPalindrome("Racecar"));

// Palindrome Check without reverse

// function isPalindrome(str) {
//   const clean = str.toLowerCase();
//   let reversed = "";
//   for (let i = clean.length - 1; i >= 0; i--) {
//     reversed += clean[i];
//   }
//   return clean === reversed;
// }

// console.log(isPalindrome("Racecar"));

// // Palindrome check with two pointers
// function isPalindrome(str) {
//   const clean = str.toLowerCase();
//   const len = clean.length;
//   for (let i = 0; i < len / 2; i++) {
//     if (clean[i] !== clean[len - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isPalindrome("Racecar"));

// Logic
// // If the first half matches the second half (mirrored), it’s a palindrome.
// The "Architect" Logic: Look for a Mismatch
// In a palindrome check, you don't look for a match to prove it is one; you look for a single mismatch to prove it isn't.
// The Rule:
// If even one pair fails, it is False.
// If you finish the whole loop and nothing failed, then it is True.
