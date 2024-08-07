const objek = {
  name: {
    person1: "Bagus Bimawan Sembodo",
    person2: "Arif Wicaksono",
  },
  description: {
    person1: "Lavanya Hills",
    person2: "Jagakarsa",
  },
};

const objek1 = {
  name: {
    person1: "Arif Adi",
  },
  description: {
    person1: "Andara",
  },
};

const nama = [
  {
    nama: "Bagus Bimawan sembodo",
  },
  {
    nama: "Arif Wicaksono",
  },
];

const ambil = nama[0];
console.log(objek.name.person1);
console.log(objek1.name);
console.log(ambil.nama);


// merge objek menggabungkan objek
const user = {
  nama:"bagus",
  kelas:12
}

console.log({...user, hobi:"Sepak bola "});

//desctructinng objek 

const name1 = {
  barang:"sofa",
  stok:12
}

const {barang,stok} = name1
console.log(barang);

const user1 = {
  name1:"Bagus",
  title:"Developer"
}

const pecah = ({name1,title})=>{
  return `${name1} - ${title}`
}
console.log(pecah(user1));

const hewan = [{
  nama:"Zebra",
  asal:"Amerika"
},{
  nama:"Harimau",
  asal:"Afrika"
}]

const funhewan = hewan.map(({nama,asal})=>{
  console.log(`nama = ${nama}`);
  console.log(`asal = ${asal}`);
})

console.log(funhewan);
