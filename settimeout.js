var promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("delay message");
  }, 1000);
});
promise.then((res) => {
  console.log(res);
});
