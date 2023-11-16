/**
 * 
 * @param {Array} arr holding values
 * @returns {Function} returns a function that tests whether its argument is in the arr
 * 
 */

export function inArray(arr:number[]){
  return function(value:number){
    return arr.includes(value)
  }
}

inArray;
// console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2

/**
 * 
 * @param {number} low is bottom of range
 * @param {number}  high is top of range
 * @returns {Function} returns a function that tests whether its argument is inside the range
 * 
 */

 export function inBetween(a:number, b:number){
  return function(value:number){
    return value>=a && value <= b;
  };
}

inBetween;
// alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6




/**
 * @returns {Function} closure that returns it's number
 */



 export function makeArmy():(()=>number)[] {
  let shooters = [];

  let i = 0;
  while (i < 10) {
      let j = i;
      let shooter = function():number { // shooter function
        return( j ); // should show its number
      };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

// let army = makeArmy();

// // Now the code works correctly
// army[0](); // 0
// army[5](); // 5
  
  //army[0](); // the shooter number 0 shows 10
  //army[5](); // and number 5 also outputs 10...