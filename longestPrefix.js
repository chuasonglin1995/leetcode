/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    // check the first and second for the common first part
    // then we compare this "prefix" to the rest of the words, and you remove one letter by one letter until it fits the next
       
    const compareWords = (word1, word2) => {
        
        if (word1 === "" || word2 === "") return ""
        
        if (!word1) return word2
        if (!word2) return word1
        
        // Make word2 the longer word
        if (word1.length > word2.length) {
            const tempWord = word1
            word1 = word2
            word2 = tempWord
        }
        
        let prefix = ""
        for (i=0; i<word1.length; i++) {
            if (word1[i] === word2[i]) {
                prefix = prefix.concat(word1[i])
            } else {
                return prefix
            }
        }

        return prefix
    }
    
    if (strs.length === 1) return strs[0]
    const word1 = strs.shift()
    const word2 = strs.shift()

    let prefix = compareWords(word1, word2)
    
    while (strs.length >=1) {
        if (prefix === "") return prefix

        let newWord = strs.shift()
        prefix = compareWords(prefix,newWord)

    }
    return prefix
};



