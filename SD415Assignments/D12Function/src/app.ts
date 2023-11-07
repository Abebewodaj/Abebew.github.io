
                                       

// import { log } from "console";
// import { CLIENT_RENEG_LIMIT } from "tls";
                             // ==>Question #1 <===
// /*Write a function, computeSalesCommission that takes a Boolean argument for salaried and number argument for salesAmount. It should return the sales commission based on following rules. First make a defining table for the function.
// • If the salesman is salaried then
// • These is no commission for sales below $300
// • 1% for sales between $300 and $500 (inclusive, and commission on the entire amount)
// • 2% for sales above $500 (only for the portion above 500 plus the 1% commission on the
// first 500)
// • If the salesman is not salaried then
// • no commission for sales below $300
// • 2% for sales between $300 and $500 (inclusive, and commission on the entire amount)
// • 3% for sales above $500 (only for the portion above 500 plus the 2% commission on the
// first 500)  */+

// function computeSalesCommission(isSalaried:boolean, salesAmount:number) :number{
//   let commission;
//   if (isSalaried) {
//     if (salesAmount < 300) {
//       commission = 0;
//     } else if (salesAmount < 500) {
//       commission = salesAmount * 0.01;
//     } else {
//       commission = salesAmount * 0.02;
//     }
//   } else {
//     if (salesAmount < 300) {
//       commission = 0;
//     } else if (salesAmount < 500) {
//       commission = salesAmount * 0.02;
//     } else {
//       commission = salesAmount * 0.03;
//     }
//   }
// return commission;
// }
// console.log(computeSalesCommission(false,400));


                          // ==>Question #3 <===
/*5. Cost of House Down Payment
Make a defining table and then write a program that calculates down payment for a home loan based
on following rules. Your program should prompt for the cost and write the down payment amount to
the console.*/
/*function calcDownpayment(costOfHouse:number):number{
  // let prompt = require("prompt-sync")();
  // let costOfHouse = prompt("enter cost of house down payment: ");
  let downPayment:number;
  if (costOfHouse < 50000) {
    downPayment = costOfHouse * 0.05;
  } else if (costOfHouse < 100000) {
    downPayment = 1000 + 0.1 * (costOfHouse - 50000);
  } else if (costOfHouse < 200000) {
    downPayment = 2000 + 0.15 * (costOfHouse - 100000);
  } else {
    //  if(costOfHouse < 200000){
    downPayment = 5000 + 0.1 * (costOfHouse - 200000);
  }
   
    return downPayment;
  }
  console.log("down payment amount is:",calcDownpayment(50000
    ));  */

    /*Write functions sumDigits and multDigits that take an integer parameter and 
    return the sum or product of the digits in the number. Use the / and % operators to find the digits.*/

                          // ==>Question #4A <===

  
   /*function sumDigits(num:number):number{
   let multiplication = 0;
   let sum:number = 0;
   let extractedDigits:number;
    while(num){
      extractedDigits = num % 10;
      sum +=extractedDigits;
      multiplication *=extractedDigits;
      num = (num - extractedDigits)/10;

    }
   return sum;
   return multiplication;

   }
   console.log(sumDigits(123));  */


               // ==>Question #4B <===


   /*function multDigits(num:number):number{
    let multiplication:number =1;
    let extractedDigits:number;
     while(num){
       extractedDigits = num % 10;
       multiplication *=extractedDigits;
       num = (num - extractedDigits)/10;
 
     }
    return multiplication;
 
    }
    console.log(multDigits(1234)); */
                     // ==>Question #5 <===


    /*5. Write a function, convertFahrenheit, that takes an input parameter 
    with a temperature in Fahrenheit and returns the temperature in Celsius.
     console.log("expect 0: ", convertFahrenheit (32)); console.log("expect -17.7778: ", 
     convertFahrenheit (0)); console.log("expect 100: ", convertFahrenheit (212)); 

      function convertFahrenheit(temperatureF:number):number{

        let Celsius = 5/9 *(temperatureF - 32);
       return Celsius;
      }
      console.log(convertFahrenheit(212)) */

                    // ==>Question #6 <===
        /*6. Write a function that takes x and y co-ordinates of two points as inputs and returns the distance
         betweenthesetwopointsbasedontheformula,d= √(x2−x1)2 +(y2−y1)2 console.log("expect 7.07 : ", 
          calcDistance (0, 0, 5, 5)); */
                             // ==>Question #6 <===

      /*function calcDistance(x1:number,y1:number,x2:number,y2:number):number{
        let distanceBetweenTwoPoints = ((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1));
        let distanceBetweenTwoPoints2 = Math.sqrt(distanceBetweenTwoPoints)

           return distanceBetweenTwoPoints2;
    }
    console.log(calcDistance(0,0,5,5))  */
  
  
    // let res = 50;
  // let x = Math.sqrt(res);
  // console.log(x);
  // function compoundInterest(deposit: number, rate: number, years: number) {
  //   const monthlyRate = rate / 12 / 100;
  //   const numPayments = years * 12;
  //   let balance = deposit;
  
  //   for (let i = 1; i <= numPayments; i++) { 
  //     balance = balance + balance * monthlyRate;
  //     debugger;
  //   }
  
  //   return balance;
  // }
  
  // const result1 = compoundInterest(100, 10, 1);
  // console.log("expect 110.47:", result1);
  
  // const result2 = compoundInterest(10000, 5, 10);
  // console.log("expect 16470.09:", result2);
//   function findAverage(arr: number[]): number {
//     let sum: number = 0;

//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }

//     let average: number = sum / arr.length;
//     return average;
// }

// console.log(findAverage([10, 20, 30, 40, 50])); 

 function sumMatrix (arr:number [][]):number{
   let sum:number = 0;
  for (let i = 0; i <  arr.length; i++) {
    for (let j = 0; j <  arr[i].length; j++) {
        sum +=arr[i][j]
     
    }
}
return sum;


 }
 const matrix=[[1,2,3], [4,5,6],[7,8,9]];
 console.log(sumMatrix(matrix));


 //test