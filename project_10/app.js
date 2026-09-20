// Task 2 — Event Entry & Ticket Price

// Expected results with this data (written before running the code):
// age = 20 (number), isAdult = true, canEnter = true -> Access granted
// ticketPrice = 500 (vip), not a member -> finalPrice = 500

// ---------- Starter data ----------
const ageInput = "20";
const hasTicket = true;
const isMember = false;
const ticketType = "vip";
const availableSeats = 5;

// ---------- Age ----------
const age = Number(ageInput);
const isAdult = age >= 18;

console.log(`age: ${age}`);
console.log(`typeof age: ${typeof age}`);
console.log(`isAdult: ${isAdult}`);

// ---------- Can the user enter? ----------
const canEnter = isAdult && hasTicket && availableSeats >= 1;

if (canEnter) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

// ---------- Ticket price ----------
// These two get reassigned inside the conditions, so they are let.
let ticketPrice = 0;
let finalPrice = 0;

if (canEnter) {
  if (ticketType === "regular") {
    ticketPrice = 200;
  } else if (ticketType === "vip") {
    ticketPrice = 500;
  } else if (ticketType === "student") {
    ticketPrice = 150;
  } else {
    console.log("Unknown ticket type");
  }

  // ---------- Member discount ----------
  finalPrice = ticketPrice;

  if (isMember) {
    finalPrice = finalPrice - 50;
  }

  // The final price must never be less than 0.
  if (finalPrice < 0) {
    finalPrice = 0;
  }
}

// ---------- Summary ----------
const summary = `
===== ENTRY SUMMARY =====
Age: ${age}
Adult: ${isAdult}
Has ticket: ${hasTicket}
Available seats: ${availableSeats}
Can enter: ${canEnter}
Ticket type: ${ticketType}
Member: ${isMember}
Final price: ${finalPrice}
=========================`;

console.log(summary);

// ---------- Debugging Challenge ----------
// The bug: acceptedTerms held the STRING "false", not the boolean false.
// Every non-empty string is truthy in JavaScript, so the if branch always ran
// and printed "Terms accepted" even though the value reads as "false".
// The fix: store a real boolean, with no quotes.
const acceptedTerms = false;

if (acceptedTerms) {
  console.log("Terms accepted");
} else {
  console.log("Terms not accepted");
}
