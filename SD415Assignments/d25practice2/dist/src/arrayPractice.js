export function doubleNums(arr) {
    return arr.map(num => num * 2);
}
export function doubleAges(arr) {
    return arr.map(person => ({ ...person, age: person.age * 2 }));
}
export function filterEven(arr) {
    return arr.filter(num => num % 2 === 0);
}
export function filterOver10(arr) {
    return arr.filter(person => person.age > 10);
}
export function findEvenNum(arr) {
    return arr.find(num => num % 2 === 0);
}
export function findEvenAge(arr) {
    return arr.find(person => person.age % 2 === 0);
}
export function includesEvenNum(arr) {
    return arr.some(num => num % 2 === 0);
}
export function includesEvenAge(arr) {
    return arr.some(person => person.age % 2 === 0);
}
