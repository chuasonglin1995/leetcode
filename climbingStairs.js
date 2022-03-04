/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    
    
    const climbHelper = (steps, memorize = {}) => {
        if (steps === 1) return 1
        if (steps === 2) return 2
        if (memorize[steps]) return memorize[steps]
        
        memorize[steps] = climbHelper(steps-1, memorize) + climbHelper(steps-2, memorize)
        return memorize[steps]
    }
    
    return climbHelper(n)
    
    
};

// Or solve it like fibonacci

// let one = 1
// let two = 1
// let temp

// for (let i=0; i<n-1; i++) {
//     temp = one
//     one = one + two
//     two = temp
// }

// return one