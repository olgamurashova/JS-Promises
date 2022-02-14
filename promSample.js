let prom = new Promise((resolve, reject) => {
  let num = Math.random();
  if (num < .5 ){
    resolve('Yay!');
  } else {
    reject('Ohhh noooo!');
  }
});
 
const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};
 
const handleFailure = (rejectionReason) => {
  console.log(rejectionReason);
};
 
prom.then(handleSuccess, handleFailure);

//another example

const examplePromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout( () => resolve('success'), 3000);
    } else {
      setTimeout( () => resolve('failed'), 5000);
    }
  });
};
