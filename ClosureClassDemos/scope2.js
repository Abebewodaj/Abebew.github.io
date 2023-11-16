

function b() { 
  function a() {
  console.log(x); 
                }
  a(); 
}
  const x = 20;
   b();


   function makeCounter() {
    let count = 0;
    return function() {
      return count++;     // ++count // 1,2,3
    };
  }
  
  let counter = makeCounter();
  console.log(counter()); // Output: 0
  console.log(counter()); // Output: 1
  console.log(counter()); // Output: 2

  
  