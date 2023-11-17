/*
a)	Copy an array
b)	Concatenate arrays into a new array
c)	Concatenate an array and a new array element
d)	Use an array as arguments
e)	Use Math.min and Math.max
f)	Use rest operator in function calls
You will need to use generic typing for copyArray and concat.   copyArray generic typing is given below.
Do the same pattern for concat.
*/
//a)	Copy an array
export function copyArray(arr) {
    // COMPLETE THIS
    return [...arr];
}
// b)	Concatenate arrays into a new array
export function concat(arr1, arr2) {
    // return arr1.concat(arr2)
    return [...arr1, ...arr2];
}
//c)	Concatenate an array and a new array element
export function concatArrElement(arr, element) {
    // return element.concat(arr)
    return [...arr, element];
}
// d)	Use an array as arguments Use Math.min 
export function findMin(...args) {
    return Math.min(...args);
}
//// d)	Use an array as arguments Use  Math.max
export function findMax(...args) {
    return Math.max(...args);
}
// f)	Use rest operator in function calls
export function findProduct(...args) {
    return args.reduce((product, num) => product * num, 1);
}
//usage in call
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
const product1 = findProduct(1, 2); //2
product1;
const product2 = findProduct(...arr1); //6
product2;
const product3 = findProduct(...arr2); //120
product3;
export function combineObjects(...objects) {
    return objects.reduce((result, obj) => ({ ...result, ...obj }), {});
}
