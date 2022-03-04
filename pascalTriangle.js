/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {

    const pascalRow = (array) => {
        
        if (array.length == 0) return [1]
                                      
        let row = []
        for (let i=0; i<array.length; i++) {
            if (i==0) row.push(1)
            if (i==array.length-1) row.push(1)
            else row.push(array[i]+array[i+1])
        }
        return row
    }
    
    let pascalTriangle = []
    let row = []
    for (let j=0; j<numRows; j++) {
        row = pascalRow(row)
        pascalTriangle.push(row)
    }
    
    

      
    return pascalTriangle
};