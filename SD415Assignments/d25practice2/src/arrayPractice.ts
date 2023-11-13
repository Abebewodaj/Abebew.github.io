
export type Person = {
    name: string;
    age: number;
  };
  
  export function doubleNums(arr: number[]): number[] {
    return arr.map(num => num * 2);
  }
  
  export function doubleAges(arr: Person[]): Person[] {
    return arr.map(person => ({ ...person, age: person.age * 2 }));
  }
  
  export function filterEven(arr: number[]): number[] {
    return arr.filter(num => num % 2 === 0);
  }
  
  export function filterOver10(arr: Person[]): Person[] {
    return arr.filter(person => person.age > 10);
  }
  
  export function findEvenNum(arr: number[]): number | undefined {
    return arr.find(num => num % 2 === 0);
  }
  
  export function findEvenAge(arr: Person[]): Person | undefined {
    return arr.find(person => person.age % 2 === 0);
  }
  
  export function includesEvenNum(arr: number[]): boolean {
    return arr.some(num => num % 2 === 0);
  }
  
  export function includesEvenAge(arr: Person[]): boolean {
    return arr.some(person => person.age % 2 === 0);
  }
  