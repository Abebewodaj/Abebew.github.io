
// function makeCounter():()=> number{
//   let count = 0;
//   function innerFunction():number{
//     count++;
//     return count;
//   }
//  return innerFunction;
// }
// let counter1 = makeCounter();
// let counter2 = makeCounter();
// console.log(counter1);
// console.log(counter2);

// function a() {
//   console.log(x); // consult Global for x and print 20 from Global
//   }
//   function b() {
//   const x = 10;
//   a(); // consult Global for a }
//   }
//   const x = 20; 
//   b();



function b() { 
  function a() {
  console.log(x); }
    const x = 10;
  a(); }
  const x = 20; 
  b();

   //closure

   function outerFunction(x) {
    // Inner function has access to the 'x' parameter of the outer function
    function innerFunction(y) {
        return x + y;
    }

    // Return the inner function, exposing it to the outside world
    return innerFunction;
}

// Create a closure by calling outerFunction with argument 10
const closure = outerFunction(10);

// Use the closure to add 5 to the original value (10)
const result = closure(5);

console.log(result); // Output: 15


function outerFunction() {
  let outerVariable = "I'm from the outer function";
  //console.log(innerVariable); // outer function cannot access innerFunction

  function innerFunction() {
    let innerVariable = "I'm from the inner function";

    console.log(outerVariable); // Accessing outerVariable from the outer scope
    console.log(innerVariable); // Accessing innerVariable from the inner scope
  }

   innerFunction(); // Call the inner function
}

  outerFunction(); // Call the outer function
     
     /*note
     When outerFunction is invoked, a Lexical Environment is created for it, which includes an Environment Record with outerVariable.
     When innerFunction is invoked inside outerFunction, a new Lexical Environment is created for it. This environment 
     includes an Environment Record with innerVariable and a reference to the outer Lexical Environment, which contains outerVariable.
     As a result, innerFunction can access both innerVariable and outerVariable due to the reference to the outer Lexical Environment */


     const name = "John";
     function sayHi() { console.log("Hi, " + names);
     }
     names = "Pete";
     sayHi(); // what will it show: "John" or "Pete"?



     function greet(name) {
      console.log("Hello, " + name + "!");
    }
    
    // Adding a property to the function object
    greet.language = "English";
    
    // Accessing the property
    console.log(greet.language); // Output: English
    

  /*what happens when an outer variable changes?
  Does a function get the most recent value or the one that existed when 
  the function was created? */


    function outer() {
      let outerVariable = 10;
    
      function inner() {
        console.log(outerVariable);
      }
    
      return inner;
    }
    
    const closureFunction = outer();
    closureFunction(); // Outputs 10
    
    // Later
    outerVariable = 20;
    closureFunction(); // Still outputs 10, not 20
    
     