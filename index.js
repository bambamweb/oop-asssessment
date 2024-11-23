class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }

  //creating shoppingcartitem class
  class ShoppingCartItem {
    constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
    }
  
    // Method to calculate the total price for this item
    getTotalPrice() {
      return this.product.price * this.quantity;
    }
  }


//creating a shoppingcart class
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    // Method to add an item to the cart
    addItem(product, quantity) {
      // Check if the product already exists in the cart
      const existingItem = this.items.find(item => item.product.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantity; // If so, increase the quantity
      } else {
        const newItem = new ShoppingCartItem(product, quantity);
        this.items.push(newItem); // Otherwise, add the new item
      }
    }
  
    // Method to remove an item from the cart
    removeItem(productId) {
      this.items = this.items.filter(item => item.product.id !== productId);
    }
  
    // Method to get the total of all items in the cart
    getTotal() {
      return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }
  
    // Method to display all items in the cart
    displayItems() {
      this.items.forEach(item => {
        console.log(`${item.product.name} (x${item.quantity}): $${item.getTotalPrice().toFixed(2)}`);
      });
    }
  }
  
  // Create products
const product1 = new Product(1, 'Laptop', 999.99);
const product2 = new Product(2, 'Phone', 499.99);
const product3 = new Product(3, 'Headphones', 149.99);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 1); // Add 1 Laptop
cart.addItem(product2, 2); // Add 2 Phones
cart.addItem(product3, 3); // Add 3 Headphones

// Display the cart items
console.log("Cart items:");
cart.displayItems();

// Get the total price of the cart
console.log(`Total price of cart: $${cart.getTotal().toFixed(2)}`);

// Remove an item from the cart (e.g., remove Phone)
cart.removeItem(2);

// Display the cart again
console.log("\nAfter removing the Phone:");
cart.displayItems();

// Get the updated total price of the cart
console.log(`Updated total price of cart: $${cart.getTotal().toFixed(2)}`);
