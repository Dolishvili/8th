function mySetTimeout(delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, delay);
    });
}
const createDelay = 3000

console.log("Toy getting ready");
mySetTimeout(createDelay)
    .then(() => {
      console.log(`Toy is ready!!!(create time: ${createDelay/1000}sec)`);
    })
    .catch((error) => {
      console.error("Error:", error);
});

function deliverToys(delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Toys delivered!"); 
      }, delay);
    });
  }

  mySetTimeout(2000)
  .then(() => {
    console.log("Delayed function executed after 2 seconds.");
    return deliverToys(2000); 
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });