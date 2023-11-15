/*
1.	Write a function collectRoomNumbers that will return an array of all the room nmbers.
2.	Write a function collectRoomsAndCapacities to return an array with room numbers and capacities in this
string format:  [“101::30”, :102::25”, “103::35”].
3.	Write a function collectLabeledRoomCaps to return room numbers and capacities in this object
format [{roomNumber: 101, capacity: 30} , …  ]
4.	Create a function countStudentsInClassroom(classrooms, roomNumber) that takes the classrooms array and a
roomNumber as parameters and returns the number of students in the specified classroom.
5.	Create a function findClassroomsWithCapacity(classrooms, minCapacity) that takes the classrooms array and a
 minimum capacity as parameters and returns an array of classroom objects that meet or exceed the specified capacity.
6.	Create a function findStudentsOlderThan(classrooms, minAge) that takes the classrooms array and a minimum
age as parameters and returns an array of student objects who are older than the specified age, along with the name of their classroom.
7.	Create a function averageStudentAge(classrooms) that takes the classrooms array as a parameter and returns
the average age of students across all classrooms.
 */
// Sample data for classrooms
export { collectRoomNumbers, collectRoomsAndCapacities, collectLabeledRoomCaps, countStudentsInClassroom, findClassroomsWithCapacity, findStudentsOlderThan, averageStudentAge }; //implement these
export const classrooms = [
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
function collectRoomNumbers(classrooms) {
    return classrooms.map((classroom) => classroom.roomNumber);
}
// 2. Function to collect room numbers and capacities in string format
function collectRoomsAndCapacities(classrooms) {
    return classrooms.map((classroom) => `${classroom.roomNumber}::${classroom.capacity}`);
}
// 3. Function to collect room numbers and capacities in object format
function collectLabeledRoomCaps(classrooms) {
    return classrooms.map((classroom) => ({ roomNumber: classroom.roomNumber, capacity: classroom.capacity }));
}
// 4. Function to count students in a specific classroom
function countStudentsInClassroom(classrooms, roomNumber) {
    const classroom = classrooms.find((classroom) => classroom.roomNumber === roomNumber);
    return classroom ? classroom.students.length : undefined;
}
// 5. Function to find classrooms with a minimum capacity
function findClassroomsWithCapacity(classrooms, minCapacity) {
    return classrooms.filter((classroom) => classroom.capacity >= minCapacity);
}
// 6. Function to find students older than a minimum age
function findStudentsOlderThan(classrooms, minAge) {
    const result = [];
    classrooms.forEach((classroom) => {
        classroom.students.forEach((student) => {
            if (student.age > minAge) {
                result.push({ name: student.name, age: student.age, classroom: classroom.roomNumber });
            }
        });
    });
    return result;
}
// 7. Function to calculate the average student age across all classrooms
function averageStudentAge(classrooms) {
    let totalAge = 0;
    let totalStudents = 0;
    //  for(let class of classrooms){
    //   for(let ages of class.)
    //  }
    classrooms.forEach((classroom) => {
        classroom.students.forEach((student) => {
            totalAge += student.age;
            totalStudents += 1;
        });
    });
    return totalStudents === 0 ? 0 : totalAge / totalStudents;
}
