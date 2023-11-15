  //  /*1    */

const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flattenedArray = nestedArray.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]
  
  // reduce the array to the product of the numbers (“expect 120”)
  //let result2 = arr.reduce((sum, current) => sum + current, 0);
   const numbers = [1,2,3,4,5];
   const productOfNumbefs = numbers.reduce((acc,currentValue) => acc * currentValue,1)
   console.log(productOfNumbefs)

   //➢ reduce the array to the max of the numbers (“expect 5”)
   let arr = [1, 2, 3, 4, 5];
let maxNumber = arr.reduce((max, current) => Math.max(max, current), -Infinity);

console.log(maxNumber); 
