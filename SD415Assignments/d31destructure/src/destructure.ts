/* 
Create the function topSalary(salaries) that returns the name of the top-paid person.
    If salaries is empty, it should return null.
    If there are multiple top-paid persons, return any of them.
P.S. Use Object.entries and destructuring to iterate over key/value pairs.
*/

// the following type definition says that SalaryObj has keys of type string and values of type number
type SalaryObj = { [key: string]: number };

export function topSalary(salaries: SalaryObj): string | null {
  let maxSalary = 0;
  let topPaidPerson: string | null = null;

  for (const [name, salary] of Object.entries(salaries)) {
    if (salary > maxSalary) {
      maxSalary = salary;
      topPaidPerson = name;
    }
  }

  return topPaidPerson;
}

// Test cases
const salaries1: SalaryObj = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
console.log(topSalary(salaries1)); // Output: Pete

const salaries2: SalaryObj = {
  "John": 100,
  "Pete": 300,
  "Mary": 250,
  "Bob": 301,
  "Alice": 400,
  "Sally": 250
};
console.log(topSalary(salaries2)); // Output: Alice

console.log(topSalary({})); // Output: null






 