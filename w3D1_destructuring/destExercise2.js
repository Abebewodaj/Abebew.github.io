const team = { point: "Bob", shooting: "Fred", power: "Jim", small: "Al", center: "Big Sleep" } 
// 1. destructure the team object onto variables with the same names as the properties



let {point,shooting,power,small,center} = team;
console.log("expect Big Sleep", center); 
console.log("expect Jim", power);


person = {
  first: 'Ben',
  last: 'Green',
  age: 44
}

let personInfo = Object.entries(person);
console.log(personInfo);

for (let [key, value] of personInfo)
   {  console.log(`${key}: ${value}`);}

