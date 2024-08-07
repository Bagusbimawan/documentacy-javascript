fetch("https://dummyjson.com/products")
  .then((res) => {
    if (!res.ok) {
      throw new Error("error");
    }
    return res.json();
  })
  .then((data) => {
    console.log("data", data);
  })
  .catch((Error) => {
    console.error(Error);
  });
