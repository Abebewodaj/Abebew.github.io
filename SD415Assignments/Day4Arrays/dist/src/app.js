// console.log("in app.ts", "sum of [1,2,3] is: ", sum([1, 2, 3]));
/**
 *
 * @param {number} aa is a number
 * @param {number} b is a number
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
export function maxOfThree(aa, b, c) {
    let max;
    if (aa >= b && aa >= c) {
        max = aa;
    } else if (b >= aa && b >= c) {
        max = b;
    } else {
        max = c;
    }
    return max;
}
 //IMPLEMENT THIS -- DO NOT USE MATH.MAX

/**
 *
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
export function sum(arr) {
    let sum = 0;
    for (const arrays of arr){
    sum +=arrays;
    }

    //IMPLEMENT THIS 
    return sum;
}
/**
 *
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
export function multiply(arr) {
    //IMPLEMENT THIS 
   let result = 1;
 for (const num of arr){
    result *=num;
 }

    return result;
}
/* findLongestWord */
/**
 * takes an array of words and returns the length of the longest one
 * @param {*} arr of words
 * @returns {number} length of longest word
 */
export function findLongestWord(arr) {

    let longestWord = arr[0];
   for (let i = 0; i < arr.length; i++) {
    if(arr[i].length > longestWord.length){
        longestWord = arr[i];
    }
    
   }

    //IMPLEMENT THIS 
    return longestWord.length;
}
/* 6. Write a function that takes two integers as inputs and returns a 2-dimensional array containing sequential numbers across each row as follows:
describe("generate array", function () {
    const expected33 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const expected23 = [ [1, 2, 3], [4, 5, 6]];
    const expected21 = [ [1], [2]];
     assert.deepEqual(generateArray(3,3), expected33); */
/**
 *
 * @param {*} rows num rows
 * @param {*} cols num cols
 * @returns {Array} 2d array with entries i + j
 */
export function generateArray(rows, cols) {
        let counter = 1;
        let resultArray = [];
    
        for (let i = 0; i < rows; i++) {
            let row = [];
            for (let j = 0; j < cols; j++) {
                row.push(counter);
                counter++;
            }
            resultArray.push(row);
        }
    
        return resultArray;
    }

    export function reverseArray(arrays){

     let reversedArr =[];

     for (let i = arrays.length -1; i >=0 ; i--) {
        reversedArr.push(arrays[i]);
        
     }

  return reversedArr;

    }
    export function reverseArrayInPlace(arrValue){
    
        let reversedArr =[];

        for (let i = arrValue.length -1; i >=0 ; i--) {
           reversedArr.push(arrValue[i]);
           
        }
   
     return reversedArr;


    }
