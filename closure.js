// Closure

// function init() {
//     // let nama = 'Bayu';
//     return function (nama) {
//     // ini bukan closure
//     // let nama = 'Dirgantara';
//         console.log(nama);    
//     }
// }
// let panggilNama = init();
// panggilNama('Bayu');


// function ucapkanSalam(waktu) {
//     return function (nama) {
//         console.log(`Halo ${nama}, Selamat ${waktu}`);
//     }
// }
// let selamatPagi = ucapkanSalam('pagi');
// let selamatPalam = ucapkanSalam('malam');
// let selamatSiang = ucapkanSalam('siang');
// selamatPagi('Bayu');
// selamatSiang('Dirgantara');


// let add = function () {
//     let counter = 0;
//     return function () {
//        return ++counter;
//     }
// }
// let a = add();
// console.log(a());
// console.log(a());
// console.log(a());



let add = (function () {
    let counter = 0;
    return function () {
       return ++counter;
    }
})();
console.log(add());
console.log(add());
console.log(add());