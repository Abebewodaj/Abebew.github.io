export { countStudentsInClassroom, findClassroomsWithCapacity, findStudentsOlderThan, averageStudentAge };
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
//   Write a set of JavaScript functions to perform the following tasks:
/*   1.	Create a function countStudentsInClassroom(classrooms, roomNumber) that takes the classrooms array and
 a roomNumber as parameters and returns the number of students in the specified classroom. */
function countStudentsInClassroom(classroom, roomNumber) {
    let targetClassroom = classroom.find(classroom => classroom.roomNumber === roomNumber);
    if (targetClassroom) {
        return targetClassroom.students.length;
    }
    else {
        return -1; //no such classrooms
    }
}
//   2.	Create a function findClassroomsWithCapacity(classrooms, minCapacity) that takes the classrooms array and a minimum capacity 
//as parameters and returns an array of classroom objects that meet or exceed the specified capacity.
function findClassroomsWithCapacity(classrooms, minCapacity) {
    return classrooms.filter((classroom) => classroom.capacity >= minCapacity);
}
//   3.	Create a function findStudentsOlderThan(classrooms, minAge) that takes the classrooms array and a minimum age as parameters and 
//returns an array of student objects who are older than the specified age, along with the name of their classroom.
function findStudentsOlderThan(classrooms, minAge) {
    const result = [];
    classrooms.forEach((classroom) => {
        classroom.students.forEach((student) => {
            if (student.age > minAge) {
                result.push({
                    name: student.name,
                    age: student.age,
                    className: `Room ${classroom.roomNumber}`
                });
            }
        });
    });
    return result;
}
//   4.	Create a function averageStudentAge(classrooms) that takes the classrooms array as a parameter and returns the average age of students across all classrooms.
//   Test your functions with the provided classrooms array to ensure they work as expected. For example:
//   javascript
function averageStudentAge(classrooms) {
    const totalAge = classrooms.reduce((accumulator, classroom) => accumulator + classroom.students.reduce((sum, student) => sum + student.age, 0), 0);
    const totalStudents = classrooms.reduce((accumulator, classroom) => accumulator + classroom.students.length, 0);
    if (totalStudents === 0) {
        return 0; // Avoid division by zero
    }
    return totalAge / totalStudents;
}
