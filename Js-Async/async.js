const hello = async () => {
  return "Hello";
};

console.log(
  hello().then((res) => {
    console.log("data", res);
  })
);
