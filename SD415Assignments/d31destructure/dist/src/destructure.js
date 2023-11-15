/*
Create the function topSalary(salaries) that returns the name of the top-paid person.
    If salaries is empty, it should return null.
    If there are multiple top-paid persons, return any of them.
P.S. Use Object.entries and destructuring to iterate over key/value pairs.
*/
export function topSalary(salaries) {
    let maxSalary = 0;
    let topPaidPerson = null;
    for (const [name, salary] of Object.entries(salaries)) {
        if (salary > maxSalary) {
            maxSalary = salary;
            topPaidPerson = name;
        }
    }
    return topPaidPerson;
}
// Test cases
const salaries1 = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
console.log(topSalary(salaries1)); // Output: Pete
const salaries2 = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
    "Bob": 301,
    "Alice": 400,
    "Sally": 250
};
console.log(topSalary(salaries2)); // Output: Alice
console.log(topSalary({})); // Output: null
