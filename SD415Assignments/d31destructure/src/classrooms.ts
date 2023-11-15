// export {countStudentsInClassroom,findClassroomsWithCapacity, findStudentsOlderThan, averageStudentAge};

// type Classroom = {
//     roomNumber:number;
//     capacity:number;
//     students:Student[] //??
// }

// type Student = {
//     //YOUR CODE HERE
//     name:string;
//     age:number;
// }   


// export const classrooms = [
//     {
//       roomNumber: 101,
//       capacity: 30,
//       students: [
//         { name: "Alice", age: 18 },
//         { name: "Bob", age: 19 },
//         { name: "Charlie", age: 17 },
//       ],
//     },
//     {
//       roomNumber: 102,
//       capacity: 25,
//       students: [
//         { name: "David", age: 20 },
//         { name: "Eve", age: 18 },
//       ],
//     },
//     {
//       roomNumber: 103,
//       capacity: 35,
//       students: [
//         { name: "Frank", age: 19 },
//         { name: "Grace", age: 20 },
//         { name: "Helen", age: 17 },
//       ],
//     },
//   ];
// //   Write a set of JavaScript functions to perform the following tasks:
// /*   1.	Create a function countStudentsInClassroom(classrooms, roomNumber) that takes the classrooms array and
//  a roomNumber as parameters and returns the number of students in the specified classroom. */
//    function countStudentsInClassroom(classroom:Classroom[],roomNumber:number):number{
//      let targetClassroom =classroom.find(classroom=>classroom.roomNumber === roomNumber)
//      if(targetClassroom){
//      return targetClassroom.students.length;}
//     else{
//       return -1  //no such classrooms
//     }
//    }

  
// //   2.	Create a function findClassroomsWithCapacity(classrooms, minCapacity) that takes the classrooms array and a minimum capacity 
// //as parameters and returns an array of classroom objects that meet or exceed the specified capacity.
//  function findClassroomsWithCapacity(classrooms: Classroom[], minCapacity: number): Classroom[] {
//   return classrooms.filter((classroom) => classroom.capacity >= minCapacity);
// }
// //   3.	Create a function findStudentsOlderThan(classrooms, minAge) that takes the classrooms array and a minimum age as parameters and 
// //returns an array of student objects who are older than the specified age, along with the name of their classroom.
//  function findStudentsOlderThan(classrooms: Classroom[], minAge: number): { name: string, age: number, className: string }[] {
//   const result: { name: string, age: number, className: string }[] = [];

//   classrooms.forEach((classroom) => {
//       classroom.students.forEach((student) => {
//           if (student.age > minAge) {
//               result.push({
//                   name: student.name,
//                   age: student.age,
//                   className: `Room ${classroom.roomNumber}`
//               });
//           }
//       });
//   });

//   return result;
// }
// //   4.	Create a function averageStudentAge(classrooms) that takes the classrooms array as a parameter and returns the average age of students across all classrooms.
// //   Test your functions with the provided classrooms array to ensure they work as expected. For example:
// //   javascript

// function averageStudentAge(classrooms: Classroom[]): number {
//   const totalAge = classrooms.reduce((accumulator, classroom) =>
//       accumulator + classroom.students.reduce((sum, student) => sum + student.age, 0),
//       0
//   );

//   const totalStudents = classrooms.reduce((accumulator, classroom) =>
//       accumulator + classroom.students.length,
//       0
//   );

//   if (totalStudents === 0) {
//       return 0; // Avoid division by zero
//   }

//   return totalAge / totalStudents;
// }

type Student = {
  name: string;
  age: number;
};

type Classroom = {
  roomNumber: number;
  capacity: number;
  students: Student[];
};

// 1. Write a function collectRoomNumbers that will return an array of all the room numbers.
export function collectRoomNumbers(classrooms: Classroom[]): number[] {
  return classrooms.map(classroom => classroom.roomNumber);
}

// 2. Write a function collectRoomsAndCapacities to return an array with room numbers and capacities in this string format: ["101::30", "102::25", "103::35"].
export function collectRoomsAndCapacities(classrooms: Classroom[]): string[] {
  return classrooms.map(classroom => `${classroom.roomNumber}::${classroom.capacity}`);
}

// 3. Write a function collectLabeledRoomCaps to return room numbers and capacities in this object format [{roomNumber: 101, capacity: 30} , ... ].
export function collectLabeledRoomCaps(classrooms: Classroom[]): { roomNumber: number; capacity: number }[] {
  return classrooms.map(classroom => ({ roomNumber: classroom.roomNumber, capacity: classroom.capacity }));
}

// 4. Create a function countStudentsInClassroom that takes the classrooms array and a roomNumber as parameters and returns the number of students in the specified classroom.
export function countStudentsInClassroom(classrooms: Classroom[], roomNumber: number): number {
  const classroom = classrooms.find(c => c.roomNumber === roomNumber);
  return classroom ? classroom.students.length : 0;
}

// 5. Create a function findClassroomsWithCapacity that takes the classrooms array and a minimum capacity as parameters and returns an array of classroom objects that meet or exceed the specified capacity.
export function findClassroomsWithCapacity(classrooms: Classroom[], minCapacity: number): Classroom[] {
  return classrooms.filter(classroom => classroom.capacity >= minCapacity);
}

// 6. Create a function findStudentsOlderThan that takes the classrooms array and a minimum age as parameters and returns an array of student objects who are older than the specified age, along with the name of their classroom.
export function findStudentsOlderThan(classrooms: Classroom[], minAge: number): { classroomName: string; students: Student[] }[] {
  return classrooms
      .filter(classroom => classroom.students.some(student => student.age > minAge))
      .map(classroom => ({
          classroomName: `Room ${classroom.roomNumber}`,
          students: classroom.students.filter(student => student.age > minAge),
      }));
}

// 7. Create a function averageStudentAge that takes the classrooms array as a parameter and returns the average age of students across all classrooms.
export function averageStudentAge(classrooms: Classroom[]): number {
  const totalStudents = classrooms.reduce((total, classroom) => total + classroom.students.length, 0);
  const totalAge = classrooms.reduce((total, classroom) => total + classroom.students.reduce((sum, student) => sum + student.age, 0), 0);

  return totalStudents === 0 ? 0 : totalAge / totalStudents;
}




  