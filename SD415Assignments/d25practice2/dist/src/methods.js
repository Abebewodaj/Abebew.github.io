/*
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
The function should not modify the array. It should return the new array.
*/
export function filterRange(arr, a, b) {
    return arr.filter((item) => item >= a && item <= b);
}
export function map2fullName(users) {
    let result = [];
    for (const user of users) {
        // Assuming the full name is a concatenation of name and surname
        const fullName = `${user.name} ${user.surname}`;
        const fullNameUser = {
            fullName,
            id: user.id,
        };
        result.push(fullNameUser);
    }
    return result;
}
