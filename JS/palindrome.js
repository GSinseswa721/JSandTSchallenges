function isPalindrome(str) {
    const cleanStr = str.replace(/[^A-Za-z0-9]/g, '')
 return cleanStr === cleanStr.split('').reverse().join('');
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("Hello")); 
console.log(isPalindrome("civic")); 
console.log(isPalindrome("madam")); 
