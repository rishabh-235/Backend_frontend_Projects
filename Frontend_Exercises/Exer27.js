const promise = Promise.resolve("Hello, ");

promise
  .then((res) => {
    console.log(res + "World!");
  })
  .catch((error) => {
    console.log(error);
  });
