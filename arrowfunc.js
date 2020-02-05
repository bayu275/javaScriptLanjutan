// Function Expression
// const tampilNama = function (nama) {
//     return `Halo ${nama}`;
// }
// console.log(tampilNama('Bayu Dirgantara'));



// arrow func
// const tampilNama = (nama) => { return `Halo ${nama}`;}
// console.log(tampilNama('Bayu Dirgantara'));



// const tampilNama = (nama,waktu) =>{
//     return `Selamat ${waktu}, ${nama}`;
// }
// console.log(tampilNama('malam','erik'));

// implisit return
// const tampilNama = nama => `Halo ${nama}`;
// console.log(tampilNama('Bayu Dirgantara'));

// jika parameternya tidak ada
// const tampilNama = () => `Hello World`;
// console.log(tampilNama());


// let mahasiswa = ['Bayu','Dirgantara','Intan'];
// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// })
// console.log(jumlahHuruf);

// let mahasiswa = ['Bayu','Dirgantara','Intan'];
// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map(nama => ({nama : nama, jmlHuruf : nama.length}));
// console.table(jumlahHuruf);


// ARROW FUNC LANJUTAN

// Konsep this pada arrow function

// Constructor Function
// const Mahasiswa = function () {
//     this.nama = 'bayu';
//     this.umur = 33;
//     this.sayHallo = function () {
//         console.log(`Halo nama ${this.nama} dan saya ${this.umur} tahun`);
//     }
// }
// const sandika = new Mahasiswa();


// arrow func
// const Mahasiswa = function () {
//     this.nama = 'bayu';
//     this.umur = 33;
//     this.sayHallo = () => {
//         console.log(`Halo nama ${this.nama} dan saya ${this.umur} tahun`);
//     }
// }
// const sandika = new Mahasiswa();


// const mhs1 = {
//     nama: 'bayu',
//     umur: 19,
//     sayHallo :()=>{
//         // console.log(`Halo nama ${this.nama} dan saya ${this.umur} tahun`);
//     }
//

// const Mahasiswa = function () {
//     this.nama = 'bayu';
//     this.umur = 33;
//     this.sayHallo = function () {
//         console.log(`Halo nama ${this.nama} dan saya ${this.umur} tahun`);
//     }
//     setInterval(()=>{
//         console.log(this.umur++);
        
//     },500)
// }
// const sandika = new Mahasiswa();


const box = document.querySelector('.box');
box.addEventListener('click',function () {
    let satu = 'size';
    let dua = 'caption';
    if (this.classList.contains(satu)) {
        [satu,dua] = [dua,satu];
    }
    this.classList.toggle(satu);
    setTimeout(()=>{
        this.classList.toggle(dua);
    }, 600);
});