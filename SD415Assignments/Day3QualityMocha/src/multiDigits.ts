
export function multDigits(num:number):number{
  let multiplication:number =1;
  let extractedDigits:number;
   while(num){
     extractedDigits = num % 10;
     multiplication *=extractedDigits;
     num = (num - extractedDigits)/10;

   }
  return multiplication;

  }