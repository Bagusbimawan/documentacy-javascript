// method array 

// every kalo nilai nya harus sama semua di dalam array  sifattnya bollean

const nilai = [80,76,90,100,70]

const same = nilai.every((index)=> index > 70)

console.log(same);

// some kalo mau nilai ada salah satu di array ada maupun tidak ada  siffatnya bollean

const nilai1 = [100,90,80,60,60]
const some = nilai1.some((index)=>  index > 80)
console.log(some);
