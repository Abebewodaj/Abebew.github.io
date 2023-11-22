// /**
//  * 
//  * @param {*} arr 
//  * @param {*} func 
//  * @returns 
//  */
// export function myMap(arr, func) {
// //IMPLEMENTATION NEEDED


// }

// /**
//  * 
//  * @param {*} arr 
//  * @param {*} func 
//  * @returns 
//  */
// export function myFilter(arr, func) {
// //IMPLEMENTATION NEEDED
// }

// /**
//  * 
//  * @param {*} arr 
//  * @param {*} func 
//  * @param {*} initialValue 
//  * @returns 
//  */
// export function myReduce(arr, func, initialValue) {
//     //IMPLEMENTATION NEEDED
//     return  ;
//     }

//     //
    
/**
 * 
 * @param {*} arr 
 * @param {*} func 
 * @returns 
 */
export function myMap(arr:any[], func:Function):any[] {
  //IMPLEMENTATION NEEDED
    const mappedArr:any[]=[];
    for(const element of arr){
      mappedArr.push(func(element))
    
    }
  
  return mappedArr;
  }
  
  /**
   * 
   * @param {*} arr 
   * @param {*} func 
   * @returns 
   */
  export function myFilter(arr: any[], func: Function) {
    //IMPLEMENTATION NEEDED
  
    const filteredArr: any[] = [];
    for (const element of arr) {
      if (func(element)) {
        filteredArr.push(element);
      }
    }
    return filteredArr;
  }
  
  /**
   * 
   * @param {*} arr 
   * @param {*} func 
   * @param {*} initialValue 
   * @returns 
   */
  export function myReduce(arr: any[], func: Function, initialValue:any) {
    //IMPLEMENTATION NEEDED
    let accumulator = initialValue !== undefined ? initialValue : arr[0];
    const startIndex = initialValue !== undefined ? 0 : 1;
  
    for (const element of arr.slice(startIndex)) {
      accumulator = func(accumulator, element);
    }
    return accumulator;
  }