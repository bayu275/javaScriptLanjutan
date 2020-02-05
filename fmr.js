const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// let angkaBaru = [];
// // mencari angka >= 3
// for (let i = 0; i < angka.length; i++) {
//     if (angka[i] >= 3 ) {
//         angkaBaru.push(angka[i]);
//     }
// }
// console.log(angkaBaru);

// filter
// const newAngka = angka.filter(e => e >= 3);
// console.log(newAngka);

// map
// kalikan semua angka dengan 2

// const newAngka = angka.map(a =>  a * 2);
// console.log(newAngka);

// reduce
// jumlahkan seluruh elemen pada array
// -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(newAngka);

// method Chaining
// Cari angka yang > 5 * 3 juml;ahkan
const hasil = angka.filter(a => a>5)
.map(a=> a*3)
.reduce((acc,curr)=> acc+curr);
console.log(hasil);


