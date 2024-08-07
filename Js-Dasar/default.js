
// default value itu jika kalo misalnya function nilai nya tidak di isi maka mengisi dari isi parameter yg kita isi

function bagus(nama = "Bagus", msg = "Selamat kerja") {
    console.log(nama,msg);    
}

console.log(bagus("Arif"));

// spread operator itu dia membongkar suatu array / objek bisa menjadi  deret value 

const angka  = [1,2.3,4,5]
console.log(Math.max(...angka));
console.log(...angka);

//merge array mengabungkan array

const nilai = [1,2,3,4,5,6]
const nama = ["bagus","arif"]
const campur = [...nilai,0, "a",...nama,"Aril"]
console.log(campur);
