/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    
  // convert to lowercase
  let tempString = s.toLowerCase()
  let palindromeValid = true
  
  while (tempString && palindromeValid) {
      [tempString, palindromeValid] = checkSimilarEnds(tempString)
  }

  return palindromeValid
  
  
  
};

const checkSimilarEnds = (tempString) => {

  if (!tempString) return ["", true]

  const leftValue = tempString[0].charCodeAt()
  const rightValue = tempString[tempString.length -1].charCodeAt()
  
  // make sure its within ascii value range 97-122, number 48-57
  if (!(leftValue >= 97 && leftValue <= 122) && !(leftValue >= 48 && leftValue <= 57))
      return [tempString.substr(1, tempString.length), true]
  
  if (!(rightValue >= 97 && rightValue <= 122) && !(rightValue >= 48 && rightValue <= 57))
      return [tempString.substr(0, tempString.length-1), true]

  if (leftValue === rightValue) return [tempString.substr(1, tempString.length-2), true]
  
  return [tempString, false]
  
}