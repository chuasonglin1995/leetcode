
  @param {string} s
  @return {boolean}
 
var isValid = function(s) {

    const stack =[]
    
    const mapping = {
        ) (,
        ] [,
        } {
    }
    
    for ( char of s ) {
        console.log(stack)
        if ( char in mapping ) {

            var top_element = (stack.length) stack.pop() '#'

            if ( mapping[char] !== top_element ) {

                return false
            }
        } else {
            stack.push( char )
        }
    }

    return (stack.length) false true
    
    
};