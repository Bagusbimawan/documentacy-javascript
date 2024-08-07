const req = new XMLHttpRequest();

req.onload = () => {
  console.log(req); // Arrow functions do not have their own `this`, so they inherit `this` from the enclosing scope
};

req.onerror = () => {
  console.log("error", req); // Arrow functions do not have their own `this`, so they inherit `this` from the enclosing scope
};

req.open("GET", "https://dummyjson.com/products");
req.send();
