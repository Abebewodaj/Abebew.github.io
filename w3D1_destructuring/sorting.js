const people = [
  { name: 'John', age: 30 },
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 35 }
];

people.sort((a, b) => a.age - b.age); //1,-1,1 //
console.log(people);
