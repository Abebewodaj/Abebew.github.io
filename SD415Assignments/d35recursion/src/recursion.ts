
export   { sumTo, factorial, fibonacci}
//outputList, outputListLoop, reverseList, reverseListLoop, TreeNode, sumTreeValues

function sumTo(n: number): number {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
}

function factorial(n: number): number {
  if(n === 0){
    return 1;
  }

    return n * factorial(n - 1)

}

 function fibonacci(n:number):number{
    if(n <= 1){
        return n
    }

   return fibonacci(n-1) + fibonacci(n-2);
 }





// type TreeNode = {
//     value: number;
//     left: TreeNode | null;
//     right: TreeNode | null;
// }