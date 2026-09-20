// Task 1 — Book Order Receipt

// Expected results (written before running the code):
// subtotal = 150 * 3      -> 450.00
// total    = 450 + 30     -> 480.00

// ---------- Data ----------
// Nothing gets reassigned here, so every variable is a const.
const rawCustomerName = " Sara ";
const bookTitle = "JavaScript Basics";
const bookUnitPrice = 150;
const quantityInput = "3"; // stays as text on purpose
const shippingCost = 30;

// ---------- Clean the name ----------
const customerName = rawCustomerName.trim();

// The brackets make the leading/trailing spaces visible in the Console.
console.log(`Original name: [${rawCustomerName}]`);
console.log(`Cleaned name:  [${customerName}]`);

// ---------- Convert the quantity ----------
const quantity = Number(quantityInput);

console.log(`quantityInput -> value: ${quantityInput}, type: ${typeof quantityInput}`);
console.log(`quantity      -> value: ${quantity}, type: ${typeof quantity}`);

// ---------- Calculations ----------
const subtotal = bookUnitPrice * quantity;
const total = subtotal + shippingCost;

// ---------- Receipt ----------
const receipt = `
===== BOOK ORDER RECEIPT =====
Customer:   ${customerName}
Book:       ${bookTitle}
Unit price: ${bookUnitPrice.toFixed(2)}
Quantity:   ${quantity}
------------------------------
Subtotal:   ${subtotal.toFixed(2)}
Shipping:   ${shippingCost.toFixed(2)}
Total:      ${total.toFixed(2)}
==============================`;

console.log(receipt);
