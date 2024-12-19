
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}

// Example
console.log(isPalindrome("Racecar")); // Output: true
console.log(isPalindrome("Hello"));   // Output: false
