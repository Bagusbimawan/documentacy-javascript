const axios = require("axios")

axios
  .get("https://dummyjson.com/products")
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  });
