//write any code you want to test here and run with npm run app
type Classroom = {
  roomNumber: number;
  capacity: number;
  students: {
    name: string;
    age: number;
  }[];
};
 
// type Student = {
//   name: string;
//   age: number;
//};
  const classrooms: Classroom[] = [
  {
    roomNumber: 101,
    capacity: 30,
    students: [
      { name: "Alice", age: 18 },
      { name: "Bob", age: 19 },
      { name: "Charlie", age: 17 },
    ],
  },
  {
    roomNumber: 102,
    capacity: 25,
    students: [
      { name: "David", age: 20 },
      { name: "Eve", age: 18 },
    ],
  },
  {
    roomNumber: 103,
    capacity: 35,
    students: [
      { name: "Frank", age: 19 },
      { name: "Grace", age: 20 },
      { name: "Helen", age: 17 },
    ],
  },
];
 
// 1. Function to collect room numbers
 function collectRoomNumbers(classrooms: Classroom[]): number[] {
  return classrooms.map((classroom) => classroom.roomNumber);
}

 
// 2. Function to collect room numbers and capacities in string format
function collectRoomsAndCapacities(classrooms: Classroom[]): string[] {
  return classrooms.map((classroom) => classroom.roomNumber + '::' + classroom.capacity);}


console.log(collectRoomNumbers(classrooms));
console.log(collectRoomsAndCapacities(classrooms));
type SalaryObj = { [key: string]: number };


              //////// topPaid person

              const salaryData: SalaryObj = {
                John: 50000,
                Jane: 60000,
                abebe:60000,
                Bob: 55000,
            };
   function topSalary(salaries: SalaryObj): string | null {
    if (Object.keys(salaries).length === 0) {
        return null;
    }

    let maxSalary = 0;
    let topPaidPerson: string | null = null;
    let topArray:string[] =[];
    for (const [person, salary] of Object.entries(salaries)) {
        if (salary > maxSalary) {
            maxSalary = salary;
            topPaidPerson = person;
            if(topPaidPerson.length > 1){
              topArray.push(topPaidPerson)
            }
        }
    }

    return topPaidPerson;
}

// Example usage:


console.log(topSalary(salaryData)); // Output: Jane or any other top-paid person if there are multiple






 






 
