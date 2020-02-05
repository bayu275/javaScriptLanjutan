// Cara untuk membuat Object pada JavaScript
// 1. Object Literal
// tidak efektif untuk Object yang banyak
// let mahasiswa1 = {
//     nama: 'Bayu',
//     energy: 10,
//     makan:function (porsi) {
//         this.energy = this.energy + porsi;
//         console.log(`Bayu ${this.nama}, selamat makan!`);
//     }
// }

// let mahasiswa2 = {
//     nama: 'Doody',
//     energy: 20,
//     makan:function (porsi) {
//         this.energy = this.energy + porsi;
//         console.log(`Bayu ${this.nama}, selamat makan!`);
//     }
// }

// 2. Function Declaration
// const methodMahasiswa = {
//     makan : function (porsi) {
//         this.energy += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     },
//     main : function (jam) {
//         this.energy -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     },
//     tidur : function (jam) {
//         this.energy += jam *2;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     }
// };

//     function Mahasiswa(nama, energy) {
//         let mahasiswa = Object.create(methodMahasiswa);
//         mahasiswa.nama = nama;
//         mahasiswa.energy = energy;
//         return mahasiswa;
//     }

// let bayu = Mahasiswa('bayu', 10);
// let doody = Mahasiswa('doody', 20);



// function Mahasiswa(nama, energy) {
//     // let mahasiswa = Object.create(methodMahasiswa);
//     // let this = Object.create(Mahasiswa.prototype);
//     this.nama = nama;
//     this.energy = energy;
//     // return mahasiswa;
//     // return this;
// }
// Mahasiswa.prototype.makan = function (porsi) {
//     this.energy += porsi;
//     return `Halo ${this.nama}, selamat makan!`;
// }
// Mahasiswa.prototype.main = function (jam) {
//     this.energy -= jam;
//     return `halo ${this.nama}, selamat makan`;
// }
// Mahasiswa.prototype.tidur = function (jam) {
//     this.energy += jam * 2;
//     return `halo ${this.nama}, selamat tidur`;
// }
// let bayu = new Mahasiswa('bayu',10);




// VERSI CLASS
class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }
    makan(porsi) {
        this.energy += porsi;
        return `Halo ${this.nama}, selamat makan!`;
    }
    main(jam) {
        this.energy -= jam;
        return `halo ${this.nama}, selamat makan`;
    }
    tidur(jam) {
        this.energy += jam * 2;
        return `halo ${this.nama}, selamat tidur`;
    }
}
  
let bayu = new Mahasiswa('bayu',10);
let doody = new Mahasiswa('doody',20);




    // 3. Constructor Declaration
    // function Mahasiswa(nama, energy) {
    //     this.nama = nama;
    //     this.energy = energy;

    //     this.makan = function (porsi) {
    //         this.energy += porsi;
    //         console.log(`Halo ${this.nama}, selamat makan!`);
    // }
    // this.main = function (jam) {
    //     this.energy -= jam;
    //     console.log(`Halo ${this.nama}, selamat bermain!`);
    //     }
    // }
    // let bayu = new Mahasiswa('bayu', 10);

    // 4. Object.create