
// /* 
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
// The function should not modify the array. It should return the new array.
// */
 export function filterRange(arr: number[], a: number, b: number): number[] {

  let result = arr.filter(numbers=>numbers >=a && numbers <= b);
   
  return result;
 }
    let arr = [5, 3, 8, 1];
    console.log(filterRange(arr,1,3))



// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
// The function should only modify the array. It should not return anything.

 export function filterRangeInPlace(arr: number[], a: number, b: number): void {
  let filterArr = arr.filter(numbers=>numbers >=a && numbers <= b)
        arr.length = 0;
        arr.push(...filterArr);  /*When you use arr.push(filterArr), you are pushing an array as a single element into the original array, 
                                resulting in nested arrays. */
}
       


// type Calculator = {
//     methods: { [key: string]: (a: number, b: number) => number };
//     calculate: (str: string) => number;
//     addMethod: (name: string, func: (a: number, b: number) => number) => void;
// }
// export const calculator: Calculator = {

//     methods: {
//         "-": (a, b) => a - b,
//         "+": (a, b) => a + b,
//     },


// }
/* Create a function unique(arr: string[]): string[] that should return an array with unique items of arr. */
 export function unique(arr: string[]): string[] {

//     return [];
  const uniqueArr: string[] = [];
  
  for (const element of arr) {
      if (!uniqueArr.includes(element)) {
          uniqueArr.push(element);
      }
  }
  return uniqueArr;
}
 

// export type User ={
//     id: string;
//     name: string;
//     age: number;
// }

// export function groupById(users: User[]): { [key: string]: User } {
//     // declare usersById to be an object with string keys and User values
//     const usersById: { [key: string]: User } = {};  
//     // FURTHER IMPLEMENTATION REQUIRED HERE


//     return usersById;
// }

type SurnameUser = {
  name: string;
  surname: string;
  id: number;
};

type FullNameUser = {
  fullName: string;
  id: number;
};

type User = {
  name: string;
  age: number;
  
};

export function map2fullName(users: SurnameUser[]): FullNameUser[] {
  return users.map((user) => {
    const fullName = `${user.name} ${user.surname}`;
    return { fullName, id: user.id };
  });
}

export function sortByAge(users: User[]): void {
  users.sort((a, b) => a.age - b.age);
}

export function findOldest(users: User[]): User {
  let oldest = users.reduce((prev, current) => (prev.age > current.age ? prev : current), users[0]);
  return oldest;
}

export function getAverageAge(users: User[]): number {
  const totalAge = users.reduce((sum, user) => sum + user.age, 0);
  const averageAge = totalAge / users.length;
  return averageAge;
}
