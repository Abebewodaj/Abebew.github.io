
export function calcDownpayment(costOfHouse:number):number{
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