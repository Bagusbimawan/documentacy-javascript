
// bentuk data json 
const data = `{
    "person":{
    "nama":"Bagus",
    "kelas":12
    }
}`;
const res = JSON.parse(data)
console.log(res.person.nama);

// bentuk objek dirubah menjadi json
const response = {
    nama:"Bagus",
    kelas:12
}

const post = JSON.stringify(response)
console.log(post);