const order = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};

checkInventory(order)
.then((resolvedValueArray) => {
  // Write the correct return statement here:
 return processPayment(resolvedValueArray);
})
.then((resolvedValueArray) => {
  // Write the correct return statement here:
  return shipOrder(resolvedValueArray);
})
.then((successMessage) => {
  console.log(successMessage);
})
.catch((errorMessage) => {
  console.log(errorMessage);
});

/* after entering node app.js in the ternimal it should print:
All of the items are in stock. The total cost of the order is 35.97.
Payment processed with giftcard. Generating shipping label.
The order has been shipped. The tracking number is: 622282. */
