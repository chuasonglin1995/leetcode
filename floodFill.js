/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
 var floodFill = function(image, sr, sc, newColor) {
    
  // Edge cases
  if (image=null || image.length<1) return image
  if (image[sr][sc] === newColor) return image
  
  
  const orgColor = image[sr][sc]
  
  const fill = (image, r, c, newColor, orgColor) => {
      
      // Edge cases: i) out of bounds; ii) not same as trigger color
      if (r<0 || r>= image.length || c<0 || c>= image[0].length) return
      if (image[r][c] !== orgColor) return
      
      image[r][c] = newColor
      fill(image, r-1, c, newColor, orgColor)
      fill(image, r+1, c, newColor, orgColor)
      fill(image, r, c-1, newColor, orgColor)
      fill(image, r, c+1, newColor, orgColor)
  }
  
  fill(image, sr, sc, newColor, orgColor)
  
  return image
};