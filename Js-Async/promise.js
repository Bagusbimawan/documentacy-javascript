// callback version

const callback = (url, sucess, fail) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      fail("gagal");
    } else {
      sucess(`berhasil ${url}`);
    }
  }, delay);
};

console.log(
  callback(
    "server running",
    function (response) {
      console.log("berhasil", response);
    },
    function (fail) {
      console.log("gagal", fail);
    }
  )
);


// promise version
const newpromise = (url) => {
  return new Promise((resolve, fail) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        fail(`fail ${fail}`);
      } else {
        resolve(`resolve ${resolve}`);
      }
    }, delay);
  });
};

newpromise("server running")
  .then(() => {
    console.log("berhasil");
  })
  .catch(() => {
    console.log("error");
  });


// promise 
  function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched");
        }, 1000);
    });
}

fetchData()
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
