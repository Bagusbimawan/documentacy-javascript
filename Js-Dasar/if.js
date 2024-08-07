let a = 10;
let b = 10;

if (a === b) {
  console.log("benar");
} else {
  console.log("salah");
}

let bagus = 80;
let arif = 90;
let nilai = 80;

if (nilai >= bagus) {
  console.log("nilai b");
} else if (bagus >= nilai) {
  console.log("harus lebih tinggi lagi");
}

// if bersarang
let password = "Bagus";

if (password.length > 7) {
  if (password.indexOf(" ") === -1) {
    console.log("password valid");
  } else {
    console.log("password tidak valid");
  }
} else {
  console.log("masukan data");
}

let nilai1 = 90;
if (nilai1 >= 90) {
  console.log("nilai bagus");
}
