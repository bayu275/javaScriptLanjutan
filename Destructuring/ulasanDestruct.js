// Destructuring Variabel / Assigments

// Destructuring Array
const perkenalan = ['halo', 'nama', 'saya','Bayu'];
// const salam = perkenalan[0];
// const nama = perkenalan[3];
// console.log(nama);

// destruct
// const [salam,satu,dua,nama] = perkenalan;
// skip items
// const [salam, , ,nama] = perkenalan;
// console.log(salam);
// console.log(nama);

// swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a,b] = [b,a];
// console.log(a);
// console.log(b);


// return value pada function

// function coba() {
//     return [1,2];
// }
// const [a,b] = coba();
// console.log(b);

// Rest parameter
// const [a,...values] = [1,2,3];
// console.log(a);
// // console.log(b);
// console.log(values);



// Desctructuring Object
// const mhs = {
//     nama : 'Bayu Dirgantara',
//     umur : 19,
//     email : 'asdawsdawdsd',
//     belajar : 'sadasdsadasd'
// }
// const {nama, ...values} = mhs;
// console.log(nama);
// console.log(values);

// Assigment tanpa declaration Object

// ({nama, umur} = {nama : 'Bayu Dirgantara',umur : 19,})
// console.log(nama);
// console.log(umur);

// Assigment ke variabel baru
// const mhs = {
//     nama : 'Bayu Dirgantara',
//     umur : 19,
// }
// const {nama: n, umur:u} = mhs;
// console.log(n);

// Default value

// Assigment ke variabel baru
// const mhs = {
//     nama : 'Bayu Dirgantara',
//     umur : 19,
//     email : 'bayu@gmail.com'
// }
// const {nama, umur,email='default@email.com'} = mhs;
// console.log(email);


// memberi nilai default + assgin ke variabel baru

// const mhs = {
//     nama : 'Bayu Dirgantara',
//     umur : 19,
//     email : 'bayu@gmail.com'
// }
// const {nama:n, umur:u,email:e='default@email.com'} = mhs;
// console.log(e);

// Rest Parameter

// const mhs = {
//     nama : 'Bayu Dirgantara',
//     umur : 19,
//     email : 'bayu@gmail.com'
// }
// const {nama,...values} = mhs;
// console.log(nama);
// console.log(values);


// Mengambil field pada Object, setelah dikirim sebagai paramater untuk function
// const mhs = {
//     id : 123,
//     nama : 'Bayu Dirgantara',
//     umur : 19,
//     email : 'bayu@gmail.com'
// }

// function getIdMhs({id}) {
//     return id;
// }
// console.log(getIdMhs(mhs));



// Destructuring

// function kalkulasi(a,b) {
//     return [a+b,a-b,a*b,a/b];
// }
// const jumlah = penjumlahanPerkalian(2,3)[0]
// const kali = penjumlahanPerkalian(2,3)[1];

// const [jumlah,kali] = penjumlahanPerkalian(2,3);
// console.log(jumlah);
// console.log(kali);

// const [tambah,kurang,kali,bagi = 'tidak ada'] = kalkulasi(2,3);
// console.log(bagi);


// function kalkulasi(a,b) {
//     return {
//         tambah: a+b,
//         kurang: a-b,
//         kali: a*b,
//         bagi:a/b
//     }
// }

// const {bagi,tambah,kali,kurang} = kalkulasi (2,3);
// console.log(kurang);


// Desctructuring function arguments
// const mhs1 = {
//     nama : 'Bayu Dirgantara',
//     umur : 33,
//     email: 'bayuusetiawa86@gmail.com'
// }

// function cetakMhs(nama, umur) {
//     return `Halo nama ${nama}, saya ${umur} tahun`;
// }
// console.log(cetakMhs(mhs1.nama,mhs1.umur));


const mhs1 = {
    nama : 'Bayu Dirgantara',
    umur : 33,
    email: 'bayuusetiawa86@gmail.com',
    nilai : {
        tugas:80,
        uts:85,
        uas:75
    }
}

// function cetakMhs(mhs) {
//     return `Halo nama ${mhs1.nama}, saya ${mhs1.umur} tahun`;
// }
// console.log(cetakMhs({mhs1}));



function cetakMhs({nama, umur,nilai:{tugas,uas,uts}}) {
    return `Halo nama ${nama}, saya ${umur} tahun dan nilau uas saya adalah ${uas}`;
}
console.log(cetakMhs(mhs1));


