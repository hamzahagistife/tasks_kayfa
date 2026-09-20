// Task 4 — Products, Set, Object, Map & Cart Total

// Expected cart total (written before running the code):
// (1200 * 1) + (150 * 2) + (60 * 3) = 1680

// ---------- 1) Products ----------
const products = [
  { id: 1, name: "Laptop", category: "electronics", price: 1200, inStock: true },
  { id: 2, name: "Headphones", category: "electronics", price: 150, inStock: true },
  { id: 3, name: "Coffee Mug", category: "kitchen", price: 25, inStock: false },
  { id: 4, name: "Desk Lamp", category: "home", price: 60, inStock: true },
  { id: 5, name: "Notebook", category: "stationery", price: 12, inStock: true },
];

// ---------- 2) Product list ----------
const firstProduct = products[0];
const lastProduct = products[products.length - 1];

console.log("----- PRODUCT LIST -----");
console.log(`First product: ${firstProduct.name}`);
console.log(`Last product: ${lastProduct.name}`);
console.log(`Number of products: ${products.length}`);

for (const product of products) {
  console.log(
    `#${product.id} | ${product.name} | ${product.category} | ${product.price} | in stock: ${product.inStock}`
  );
}

// ---------- 3) Selected filters ----------
const selectedCategories = new Set();
selectedCategories.add("electronics");
selectedCategories.add("kitchen");
selectedCategories.add("home");
selectedCategories.add("electronics"); // added twice on purpose: a Set keeps it once

console.log("----- SELECTED CATEGORIES -----");
console.log(selectedCategories);
console.log(`Size: ${selectedCategories.size}`);
console.log(`Is "kitchen" selected? ${selectedCategories.has("kitchen")}`);

// ---------- 4) Current user ----------
const currentUser = {
  id: 101,
  name: "Sara",
  email: "sara@example.com",
  address: {
    street: "Main Street 12",
    city: "Amman",
    country: "Jordan",
  },
};

// Reading a value out of the nested object.
const userCity = currentUser.address.city;

console.log("----- CURRENT USER -----");
console.log(`Name: ${currentUser.name}`);
console.log(`Email: ${currentUser.email}`);
console.log(`City: ${userCity}`);

// ---------- 5) Shopping cart quantities ----------
const cartQuantity = new Map();
cartQuantity.set(1, 1); // Laptop
cartQuantity.set(2, 2); // Headphones
cartQuantity.set(4, 3); // Desk Lamp

console.log("----- CART QUANTITIES -----");
console.log(`Quantity of product 2: ${cartQuantity.get(2)}`);
console.log(`Is product 3 in the cart? ${cartQuantity.has(3)}`);
console.log(`Map size: ${cartQuantity.size}`);

// ---------- 6) Cart total ----------
function calculateCartTotal(products, cartQuantity) {
  let total = 0;

  for (const product of products) {
    let quantity = 0;

    // A product that is not in the Map counts as quantity 0.
    if (cartQuantity.has(product.id)) {
      quantity = cartQuantity.get(product.id);
    }

    total = total + product.price * quantity;
  }

  return total;
}

const cartTotal = calculateCartTotal(products, cartQuantity);

console.log("----- CART TOTAL -----");
console.log(`Total: ${cartTotal.toFixed(2)}`);
