/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false
    if (x < 10) return true
    
    const numArray = x.toString().split('')
    const numChecks = Math.floor(numArray.length/2)
    
    for (i=0; i< numChecks; i++) {
        if (numArray[i] !== numArray[numArray.length-i-1]) return false
    }

    return true
};