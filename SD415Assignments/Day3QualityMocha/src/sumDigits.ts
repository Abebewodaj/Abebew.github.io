
export function sumDigits(num:number):number{
  let multiplication = 0;
  let sum:number = 0;
  let extractedDigits:number;
   while(num){
     extractedDigits = num % 10;
     sum +=extractedDigits;
     num = (num - extractedDigits)/10;
   }
  return sum;

  }