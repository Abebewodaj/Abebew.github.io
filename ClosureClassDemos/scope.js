
/*what happens when an outer variable changes?
Does a function get the most recent value or the one that existed when the function was created? */
let globalV = 5;
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
