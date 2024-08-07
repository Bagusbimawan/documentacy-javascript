// const array = [1, 2, 3, 4, 5, 6];

// const baru = array.filter((n) => {
//   return n < 5;
// });

// console.log(baru);

// untuk menfilter
const nilai = [
  {
    nama: "Bagus",
    nilai: 80,
  },
  {
    nama: "Aril",
    nilai: 90,
  },
  {
    nama: "Arif adi",
    nilai: 92,
  },
  {
    nama: "wicak",
    nilai: 80,
  },
];

const pecahArray = nilai.filter((n) => n.nilai > 80);

console.log(pecahArray);

const pecah = nilai.map((item) => {
  return item.nama && item.nilai;
});
console.log(pecah);

const pecah1 = nilai.map((item) => item.nama);
console.log(pecah1);

