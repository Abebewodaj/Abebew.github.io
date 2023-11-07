 
 export function computeSalesCommission(isSalaried:boolean, salesAmount:number) :number{
    let commission;
    if (isSalaried) {
      if (salesAmount < 300) {
        commission = 0;
      } else if (salesAmount < 500) {
        commission = salesAmount * 0.01;
      } else {
        commission = 500 * 0.01 + (salesAmount - 500) * 0.02;
      }
    } else {
      if (salesAmount < 300) {
        commission = 0;
      } else if (salesAmount < 500) {
        commission = salesAmount * 0.02;
      } else {
        commission = 500 * 0.02 + (salesAmount - 500) * 0.03;
      }
    }
  return commission;
  }
