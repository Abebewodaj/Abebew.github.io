// Given the following data structure representing a list of orders:

type Order = {
  orderId: number;
  products: string[];
  totalAmount: number;
};

const order1: Order = { orderId: 1, products: ["ItemA", "ItemB"], totalAmount: 50 };
const order2: Order = { orderId: 2, products: ["ItemC", "ItemD"], totalAmount: 30 };
const order3: Order = { orderId: 3, products: ["ItemA", "ItemD", "ItemE"], totalAmount: 80 };
const order4: Order = { orderId: 4, products: ["ItemB", "ItemE"], totalAmount: 40 };

const orderList: Order[] = [order1, order2, order3, order4];

// Your task is to write TypeScript functions for the following:

/* 1. Write a function, calculateAverageOrderAmount, that calculates and returns
 the average order amount for a given list of orders.*/
//    Use a for..of loop to iterate through the orders.

function calculateAverageOrderAmount(orders:Order[]):number{

  let totalorder= 0;
  for(let order of orders){
    totalorder +=order.totalAmount
  }
  return totalorder/orders.length;
}





/* 2. Develop a function, findHighValueOrders, using a for..of loop, to find and return orders 
with a total amount greater than a specified threshold. */
//    The function should take the order list and a threshold amount as parameters.

   function findHighValueOrders(orders:Order[],threshold:number):Order[]{
  
     let highValueOrders:Order[] =[];
     for(let order of orders ){
      if(order.totalAmount > threshold){
        highValueOrders.push(order);
      }
     }
   return highValueOrders;

   }


// 3. Write a function, getAllProducts, that utilizes the concat method to return an array containing all unique products from the orders.

// 4. Use an appropriate array method to get an array of order IDs for orders containing a specific product.
//    The function should take the order list and the product name as parameters.

// 5. Develop a function, getTotalAmountForProduct, that calculates and returns the total amount spent on a specific product across all orders.
//    The function should take the order list and the product name as parameters.

// Example usage of the functions:
console.log(calculateAverageOrderAmount(orderList)); // Expected output: 50
console.log(findHighValueOrders(orderList, 40)); // Expected output: [order1, order3]
//console.log(getAllProducts(orderList)); // Expected output: ["ItemA", "ItemB", "ItemC", "ItemD", "ItemE"]
//console.log(getOrderIdsByProduct(orderList, "ItemB")); // Expected output: [1, 4]
//console.log(getTotalAmountForProduct(orderList, "ItemA")); // Expected output: 130
