function nama() {
  console.log("bagus");
}
nama();

// function expresion
// const tambah = function (a, b) {
//   return a + b;
// };
// console.log(tambah(5, 10));

function bagus() {
  return function tambah(a, b) {
    return a + b;
  };
}

console.log(bagus(5, 12));

// method
const fungsi = {
  tambah: function tambah(a, b) {
    return a + b;
  },
  kali: function kali(a, b) {
    return a * b;
  },
};

console.log(fungsi.kali(10, 20), fungsi.tambah(10, 30));

//this
const saya = {
  nama: "Bagus Bimawan Sembodo",
  kelas: 12,
  hobi: "Coding",
  kenalan: function () {
    return ` nama saya ${this.nama} kelas saya adalah kelas ${this.kelas} hobi saya adalah ${this.hobi}`;
  },
};
console.log(saya.kenalan());

function greeting(name, callback) {
  console.log("hello my name " + name + " !");
  callback();
}

function say() {
  console.log("say goodbye");
}
console.log(greeting("bagus", say));

// function foreach yg loop di dalam array tanpa harus menggunakan for dan while
const person = ["bagus", "arif", "aurel"];

person.forEach(function (user, index) {
  console.log(`nomer ${index} nama ${user} `);
});

// map

const hai = ["bagus", "aril", "dinar"];

hai.map(function (index, name) {
  return `nomer ${index} nama ${name}`;
});
console.log(hai);

// arrow function
const itu = () => {
  return console.log("bagus");
};

console.log(itu());

// arrow function implisit
const hallo = () => console.log("hallow");
console.log(hallo());

const hallow = () => console.log("hai nama aku");

console.log(hallow());

//rest  parram untuk jika tidak mau buat parameter terlalu panjang bisa pakai rest param
const SumAll = (...nums) => {
  console.log(nums);
};
console.log(SumAll("nama ku adalah bagus"));
console.log(SumAll(12));


const pemenang = ["Bagus", "Aril", "Wicak","Adi","Echa"];

const juara = (gold, silver, perak,...sisa) => {
  console.log(`medali mas ${gold}`);
  console.log(`medali silver ${silver}`);
  console.log(`medali perak ${perak}`);
  console.log(`sisanya ${sisa}`);
};
console.log(juara(...pemenang));

