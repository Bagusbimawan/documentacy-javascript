// logical operator

// and
let age = 19;
let gender = "male";

if (gender === "male" && age === 19) {
  console.log("benar");
}

let password = "bagus";
if (password.length >= 5 && password.indexOf(" ") === -1) {
  console.log("password valid");
}else{
    console.log("password tidak valid");
}

// or 

let role = "superadmin"

if (role === "admin" || role === "spv" || role === "superadmin"){
    console.log("akses diizinkan");
}else{
    console.log("akses ditolak");
}


// not
let role1 = "admin"

if (role1 !== "admin"){
    console.log("data ditolak");
}else{
    console.log("data valid 1");
}