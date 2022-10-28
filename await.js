(async () => {
  const arr = ["foo", "bar", "a", "b"];
  for await (let a of arr) {
    console.log(a);
    await sleep(2000);
  }
  return sleep(2000);
})();
