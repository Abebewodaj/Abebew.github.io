/*
Create the function topSalary(salaries) that returns the name of the top-paid person.
    If salaries is empty, it should return null.
    If there are multiple top-paid persons, return any of them.
P.S. Use Object.entries and destructuring to iterate over key/value pairs.
*/
export function topSalary(salaries) {
    if (Object.keys(salaries).length === 0) {
        return null;
    }
    let maxSalary = 0;
    let topPaidPerson = null;
    for (const [person, salary] of Object.entries(salaries)) {
        if (salary > maxSalary) {
            maxSalary = salary;
            topPaidPerson = person;
        }
    }
    return topPaidPerson;
}
// Example usage:
const salaryData = {
    John: 50000,
    Jane: 60000,
    Bob: 55000,
};
console.log(topSalary(salaryData)); // Output: Jane or any other top-paid person if there are multiple
