const {checkAvailability} = require('./library.js');

const onFulfill = (itemsArray) => {
  console.log(`Items checked: ${itemsArray}`);
  console.log(`Every item was available from the distributor. Placing order now.`);
};

const onReject = (rejectionReason) => {
	console.log(rejectionReason);
};

// Write your code below:
const checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.');
const checkPants = checkAvailability('pants', 'Favorite Supply Co.');
const checkBags = checkAvailability('bags', 'Favorite Supply Co.');

Promise.all([checkSunglasses,checkPants, checkBags])
.then(onFulfill)
.catch(onReject);

/* When running node app.js in the terminal, the output will be the following:
Checking availability of sunglasses at Favorite Supply Co....
Checking availability of pants at Favorite Supply Co....
Checking availability of bags at Favorite Supply Co....
sunglasses are in stock at Favorite Supply Co.
pants are in stock at Favorite Supply Co.
bags are in stock at Favorite Supply Co.
Items checked: sunglasses,pants,bags
Every item was available from the distributor. Placing order now. */
