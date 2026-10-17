// Task 7 — Coffee Order Form

// ---------- Products ----------
const products = {
  espresso: { name: "Espresso", price: 45 },
  latte: { name: "Latte", price: 65 },
  croissant: { name: "Croissant", price: 40 },
};

const discountQuantity = 3; // 3 pieces or more -> 10% off
const discountRate = 0.1;
const freeDeliveryLimit = 200;

// ---------- DOM elements ----------
const orderForm = document.getElementById("order-form");
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const productSelect = document.getElementById("product");
const quantityInput = document.getElementById("quantity");
const ordersArea = document.getElementById("orders");

const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const productError = document.getElementById("product-error");
const quantityError = document.getElementById("quantity-error");

// 11 digits that start with 01.
const phonePattern = /^01\d{9}$/;

// One place that writes an error under a field.
function showError(errorElement, message) {
  errorElement.textContent = message;
}

function clearErrors() {
  showError(nameError, "");
  showError(phoneError, "");
  showError(productError, "");
  showError(quantityError, "");
}

// Money is shown the same way as the task example: 175.5 and not 175.50
function formatMoney(amount) {
  return Number(amount.toFixed(2));
}

function validateOrder(customerName, phone, productKey, quantityText) {
  let isValid = true;

  if (customerName === "") {
    showError(nameError, "Name is required");
    isValid = false;
  } else if (customerName.length < 3) {
    showError(nameError, "Name must be at least 3 characters");
    isValid = false;
  }

  if (!phonePattern.test(phone)) {
    showError(phoneError, "Phone must be 11 digits and start with 01");
    isValid = false;
  }

  if (productKey === "") {
    showError(productError, "Please choose a product");
    isValid = false;
  }

  const quantity = Number(quantityText);

  if (quantityText === "" || Number.isNaN(quantity)) {
    showError(quantityError, "Quantity is required");
    isValid = false;
  } else if (quantity < 1 || quantity > 10) {
    showError(quantityError, "Quantity must be from 1 to 10");
    isValid = false;
  }

  return isValid;
}

// Business rules: price * quantity, then the discount.
function calculateTotal(price, quantity) {
  let total = price * quantity;

  if (quantity >= discountQuantity) {
    total = total - total * discountRate;
  }

  return total;
}

// Bonus: every new order is added under the previous one.
function showOrder(customerName, product, quantity, total) {
  const orderElement = document.createElement("div");
  orderElement.className = "order";

  let orderHtml = `
    <p>Name: ${customerName}</p>
    <p>Product: ${product.name} &times; ${quantity}</p>
    <p class="order-total">Total: ${formatMoney(total)} EGP</p>
  `;

  if (total > freeDeliveryLimit) {
    orderHtml = orderHtml + `<span class="free-delivery">Free delivery</span>`;
  }

  orderElement.innerHTML = orderHtml;
  ordersArea.appendChild(orderElement);
}

function handleOrder(event) {
  event.preventDefault();
  clearErrors();

  const customerName = nameInput.value.trim();
  const phone = phoneInput.value.trim();
  const productKey = productSelect.value;
  const quantityText = quantityInput.value.trim();

  // Any error -> the order is not shown.
  if (!validateOrder(customerName, phone, productKey, quantityText)) {
    return;
  }

  const product = products[productKey];
  const quantity = Number(quantityText);
  const total = calculateTotal(product.price, quantity);

  showOrder(customerName, product, quantity, total);

  orderForm.reset();
}

orderForm.addEventListener("submit", handleOrder);
