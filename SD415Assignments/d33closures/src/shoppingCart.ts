//This closure exercise involves a common real-world scenario.  

// This exercise uses closures to create a shopping cart. It encapsulates the cart array, allowing you to
//  add items, remove items, and calculate the total cost. The items and their prices are private and can only be 
//  accessed or modified through the provided methods, demonstrating the concept of closures in a different context.
// Exercise: Closure and a Shopping Cart

// Create a function that simulates a shopping cart. The cart should allow you to add items,
// remove items, and calculate the total cost. Items and their prices should be private
// and not directly accessible.

type Item = {
    items: string;
    price: number;
};

type Cart = {
    addItem: (item: string, price: number) => void;
    removeItem: (item: string) => void;
    getTotal: () => number;
};

export function createShoppingCart(): Cart {
    // Private array to store items and their prices
    const cart: Item[] = [];

    // Function to find the index of an item in the cart
    function findItemIndex(itemName: string): number {
        return cart.findIndex(item => item.items === itemName);
    }

    // Public methods exposed to manipulate the shopping cart
    return {
        addItem: function (itemName, price) {
            const index = findItemIndex(itemName);

            if (index !== -1) {
                // Item already exists, update the price
                cart[index].price += price;
            } else {
                // Add a new item
                cart.push({ items: itemName, price: price });
            }
        },

        removeItem: function (itemName) {
            const index = findItemIndex(itemName);

            if (index !== -1) {
                // Remove the item
                cart.splice(index, 1);
            }
        },

        getTotal: function () {
            // Calculate the total cost of all items in the cart
            return cart.reduce((total, item) => total + item.price, 0);
        }
    };
}
