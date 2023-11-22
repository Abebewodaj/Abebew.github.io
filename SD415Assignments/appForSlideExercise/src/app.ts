//write any code you want to test here and run with npm run app
  //  Destructuring assignment
//let arr = ["Ilya", "Kantor"]
// // sets firstName = arr[0] and surname = arr[1]
// let [firstName, surname] = arr;
// console.log(firstName);
// console.log(surname);

//import { DESTRUCTION } from "dns";

           /***/
  //powerful with split or other array-returning methods
// let [firstName, surname] = "Ilya,Kantor".split(","); //or space
// console.log(firstName);
//  console.log(surname);


// const [name1, name2, ...rest] = ["Julius", "Caesar", "Consul”, “ of the Roman Republic"];
// console.log(name1); // Julius 
// console.log(name2); // Caesar
// console.log(...rest); //???????  why is not outputing in array
// console.log(rest[0]);


//Exercise
//const team =  ["Bob", "Fred", "Jim"]
// destructure the team array onto variables with the same names as the elements, but all lower case
   
//  const [bob,fred,jim] = team;
// console.log("expect Bob", bob );
//  console.log("expect Jim", jim);
//  console.log("expect Fred", fred);


           //object DESTRUCTURING

          //  const options = {
          //   title: "Menu", width: 100, height: 200
          //   };
          //   let {title, width, height} = options; 
          //   console.log(title); // Menu 
          //   console.log(width); // 100 
          //   console.log(height); // 200

            /* default value (Javascript) */
          // const options = {
          //   title: "Menu" };
          //   const {width = 100, height = 200, title} = options; 
          //   console.log(title); // Menu
          //   console.log(width); // 100
          //   console.log(height); // 200

            /*default value (Typescripts) */
            
            // type OptionsType = {width: number, height: number, title: string}; 
            // const options ={} as OptionsType;
            // options.title = "Menu";
            // let {width = 100, height = 200, title} = options; 
            // console.log(title); // Menu 
            // console.log(width); // 100 
            // console.log(height); // 200


            /* TypeScript parameter declaration for destructuring */

 //const obj = {a: 1, b: 2 }
// function addObj({ a, b }: { a: number; b: number }): number {
// return a + b; }
// console.log("expect 3", addObj(obj));


    //or, define the type of the entire parameter object
//function addObj(obj: {a: number, b: number}): number {
//const {a, b} = obj; // then destructure within function body 
 //return a + b;
//}
 //console.log(addObj(obj))

// more readable if object has many properties.



//const object1 = {
  //a: 'somestring',
  //b: 42,
//};

//for (const [keys, valuess] of Object.entries(object1)) {
  //console.log(`${keys}: ${valuess}`);
  //console.log(keys + ":" + valuess);


 // };
  
  /*const mappedArray = Object.entries(object1).map(([key, value]) => {
    return `${key}: ${value}`;
  });
  
  console.log(mappedArray);
  
}  */

// const obj = { foo: "bar", baz: 42 };
// console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

// const arrayLike = { 0: "a", 1: "b", 2: "c" };
// console.log(Object.entries(arrayLike)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// const randomKeyOrders = { 100: "a", 2: "b", 7: "c" };
// console.log(Object.entries(randomKeyOrders)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]


//           /*  JSON  */
//           let numbers = "[0, 1, 2, 3]";
// numbers = JSON.parse(numbers);
// console.log( numbers[1] ); // 1

// let user3 = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
// user3 = JSON.parse(user3);
// console.log( user3.friends[2] ); // 2
// user3.loc = {lat:22, long: 99}

// let user = {
//   name: "John Smith",
//   age: 55,
//   friend: user3,
//   favNums: numbers,
// };
// let json2 = JSON.stringify(user);
// console.log(json2);
// let user2 = JSON.parse(json2); //user2 now is a "deep clone" of user
// console.log(user2);
// user2.friend.age = 85;
// user2.friend.loc.lat = 123;
// console.log(user3.age);
// console.log(user3.loc.lat);

                        //Exercise
//create and log to the console a JSON string from john. Then create a new instance of john, johnClone, using JSON.parse on the JSON string you created. Is john === johnClone?
// const john = {
// name: "John",
// surname: "Smith",
// isAdmin: false,
// birthday: {year: 2000, month: "February", "day": 3}, friends: [0,1,2,3]
// };

// // Create a JSON string from john
// const johnString = JSON.stringify(john);

// // Log the JSON string to the console
// //console.log("JSON String:", johnString);

// // Create a new instance of john, johnClone, using JSON.parse
// const johnClone = JSON.parse(johnString);
// console.log(johnClone);

// // Check if john and johnClone are equal
// //console.log("Are john and johnClone equal?", john === johnClone);



                   /*  Closures  */

                  //  function makeCounter() {
                  //   let count = 0;
                  
                  //   // Inner function to increment count and return the incremented value
                    
                  //     function innerFunc(){
                  //       count++;
                  //       return count;
                  //     }
                    
                  //   // const innerFunc = () => {
                  //   //   count++;
                  //   //   return count;
                  //   // };
                  
                  //   return innerFunc;
                  // }
                  
                  // // Create two counters
                  // const counter1 = makeCounter();
                  // const counter2 = makeCounter();
                  
                  // // Use the counters
                  // console.log("Counter 1:", counter1()); // Output: 1
                  // console.log("Counter 1:", counter1()); // Output: 2
                  
                  // console.log("Counter 2:", counter2()); // Output: 1
                  // console.log("Counter 2:", counter2()); // Output: 2
                  

                  type Shooter = () => void; 
                  function makeArmy(): Shooter[] {
                    const shooters: Shooter[] = []; 
                    let i = 0;
                    while (i < 10) {
                    let shooter = function(): void { 
                      console.log( i );
                    }; 
                    shooters.push(shooter); i++;


                  }
                    console.log(shooters)
                    return shooters; }
                    const army = makeArmy(); 
                    army[9]();  
  /*    Explanation of the Output:
        Due to the closure property in JavaScript, all shooter functions created in the loop share the same reference to the variable i in the outer scope.
        When army[0](); is called, it logs the current value of i, which is 10, because the loop has completed, and i has been incremented until it's no longer less than 10.
        As a result, calling any shooter function in the army array will log 10, not the value of i when the shooter function was created.
       In summary, this code illustrates the concept of closures in JavaScript, where inner functions (the shooter functions) have access to the outer function's variables 
       (i in this case) even after the outer function has finished executing. The consequence is that all shooter functions in the array will log the final value of i, which is 10.  */
        



      //  let company = {
      //   sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }], 
      //   development: {
      //   sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }], //subdepartments
      //   internals: [{name: 'Jack', salary: 1300}] }
      //   };
        // write an expression to access the name and salary of the second employee in sales
        // same for the second employee in the sites subdepartment   

        //  let nameSalary = Object.entries(company);
        //  console.log(nameSalary);  

          // let objValues = Object.values(company.development);
          // console.log(objValues);

            //  let saleName = company.sales[1].name;
            //  let salesSalary = company.sales[1].salary;
            //  console.log(saleName);
            //  console.log(salesSalary);
            //  let sitesName = company.development.sites[1].name;
            //  console.log(sitesName)
            // function sumSalaries(department) {
            //   if (Array.isArray(department)) { // case (1)
            //   return department.reduce((prev, current) => prev + current.salary, 0); // sum the array } else { // case (2)
            //   let sum = 0;
            //   for (let subdep of Object.values(department)) {
            //   sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results }
            //   return sum; }} console.log(sumSalaries(company))
            // }



     // Define a type Person with properties name (string) and salary (number)
type Person = { name: string; salary: number; }

// Define a type Department as an object where keys are department names and values are arrays of Persons or sub-Departments
type Department = { [deptName: string]: Person[] | Department };

// Declare a variable company of type Department, representing the company's structure
const company: Department = {
  // The "sales" department with an array of Persons
  sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
  // The "development" department with sub-departments "sites" and "internals"
  development: {
    // The "sites" sub-department with an array of Persons
    sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
    // The "internals" sub-department with an array of Persons
    internals: [{ name: 'Jack', salary: 1300 }]
  }
};

// Define a function sumSalaries that takes a Department as an argument and returns the total salary
function sumSalaries(department: Department) {
  // Check if the department is an array (Persons)
  if (Array.isArray(department)) { // case (1)
    // If it's an array, calculate the sum of salaries using reduce
    return department.reduce((prev, current) => prev + current.salary, 0);
  } else 
  {                    // case (2)
    // If it's not an array, initialize a sum variable
    let sum = 0;
    // Iterate over sub-departments using Object.values
    for (const subdep of Object.values(department)) {
      // Recursively call sumSalaries for each sub-department and add the result to the sum
      const subDepartment = subdep as Department; // Type assertion, treating subdep as Department
      sum += sumSalaries(subDepartment);
    }
    // Return the total sum for the department and its sub-departments
    return sum;
  }
}

// Call the sumSalaries function with the company object and log the result to the console
console.log(sumSalaries(company));




/*For example, if department is the "development" department in the company object:

typescript

development: {
  sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
  internals: [{ name: 'Jack', salary: 1300 }]
}

Object.values(development) would return an array:

typescript

[
  [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
  [{ name: 'Jack', salary: 1300 }]
]

The for-of loop then iterates over each of these values (subdep), which are either arrays of persons or sub-departments. Inside the loop, the code recursively calls sumSalaries(subDepartment) for each sub-department, effectively traversing the entire hierarchical structure of the company to calculate the total salary.
 */
   /* In the provided code, the base case for the recursive function sumSalaries is the following condition:

typescript

if (Array.isArray(department)) { // case (1)
  return department.reduce((prev, current) => prev + current.salary, 0);
}

This condition checks whether the department is an array. If it is, it means that the current level of the department hierarchy contains individual persons (employees) and not sub-departments. In this case, the function calculates and returns the sum of salaries for the persons in that array using reduce.

This is the base case because it represents the termination condition for the recursion. When the function encounters a department that is an array of persons (i.e., it has reached the leaf nodes of the department hierarchy), it calculates the sum of salaries for that specific department and stops the recursion.

The recursive case, on the other hand, handles situations where the department is an object (not an array), meaning it contains sub-departments. The function then recursively calls itself for each sub-department, summing up the salaries across the entire department hierarchy.
  */