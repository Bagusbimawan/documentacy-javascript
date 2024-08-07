// reduce nilai pertama dan nilai kedua dari array akan ditambah kemudian hasil dari nilai itu akan ditambah ke nilai berikutnya

const subtotal = [1500,2000,3000,4000]

const total = subtotal.reduce((currenttotal,Singlesubtotal)=>{
    return currenttotal + Singlesubtotal
})

console.log(total);