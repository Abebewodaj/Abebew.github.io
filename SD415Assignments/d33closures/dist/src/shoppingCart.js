//This closure exercise involves a common real-world scenario.  
export function createShoppingCart() {
    // Private array to store items and their prices
    const cart = [];
    // Function to find the index of an item in the cart
    function findItemIndex(itemName) {
        return cart.findIndex(item => item.items === itemName);
    }
    // Public methods exposed to manipulate the shopping cart
    return {
        addItem: function (itemName, price) {
            const index = findItemIndex(itemName);
            if (index !== -1) {
                // Item already exists, update the price
                cart[index].price += price;
            }
            else {
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
