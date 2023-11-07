// Q1. Write a function, double, that takes a number and returns 2 times the number.
/**
 *@returns {number} double the input
 */
 export function double(num: number): number {
  return num * 2; 
}



//Q2. Write a function times100 that takes a number and returns 100 times the number
/**
 * @returns {number} 100 times the input
 */
export function times100(number: number) {
  return number * 100;
}


//Q3. Write a function, myMap, that takes an array and a function and returns a new array that has
// the function applied to each element of the input array. Use your myMap function with your
// double and times100 functions.

/**
 * @returns {Array} creates a new array with function mapped to each element
 */
export function myMap( arr:number[], fun:(num:number)=>number):number[]{
 
    return arr.map(element=> fun(element));


    
}
 export let inputArr = [1,2,3,4,5]
 export let inputArr2 = [11,12,13]
let doubleArr= myMap(inputArr, double)
console.log(doubleArr)


let times100Arr = myMap(inputArr, times100);
console.log(times100Arr)

// q4.  Demonstrate your myMap function with an anonymous function that
// triples the input value. Write this as an anonymous function expression. Then write it using an
// arrow expression. Write these functions in the mocha tests where it says /

//anonymous method
export const triple = function(num:number):number{
  return num*3
}


//arrow method
export const tripleArrow = (num:number):number=>num*3;
//