let str = "LOL";
for (let i = 0; i <= 4; i++) {
  console.log("outer", i);
  for (let j = 0; j < str.length; j++) {
    console.log("inner", j);
  }
}


// break
for (let i = 0; i < 1000; i++) {
  console.log(i);
  if (i === 100) break;
}

// for of
const array = ["pisang", "mangga", "Jeruk"];
for (let buah of array) {
  console.log(buah);
}

// nested array
const array1 = [
  ["bagus", "arif"],
  ["wicak", "angga"],
  ["dimas", "echa"],
];

// clean code for of untuk array  
for (let nama of array1){
  for(let murid of nama){
    console.log(murid);
  }
}

// for in untuk objek 
const objek = {
  olivia:20,
  bagus:30,
  arif:20
}

for(let nama in objek){
  console.log(nama);
}