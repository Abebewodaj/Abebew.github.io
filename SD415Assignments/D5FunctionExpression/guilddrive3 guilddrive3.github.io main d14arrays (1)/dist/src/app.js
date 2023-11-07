console.log("in app.ts", "sum of [1,2,3] is: ", sum([1, 2, 3]));
/**
 *
 * @param {number} aa is a number
 * @param {number} b is a number
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
export function double(number) {
    return number * 2;
  }
  
  export function times100(number) {
    return number * 100;
}
export function double(num) {
    return num * 2;
  }
  
  export function times100(num) {
    return num * 100;
  }
  
  export function myMap(arr, func) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(func(arr[i]));
    }
    return newArr;
  }
  export function myMapS(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i]));
    }
    return result;
  }
  
  // Using an anonymous function expression
  const arr = [1, 2, 3, 4, 5];
  
  const tripledValues = myMap(arr, function (value) {
    return value * 3;
  });
  
  console.log(tripledValues); // Output: [3, 6, 9, 12, 15]
  
 
  
 