// 2.1 EXECUTION CONTEXT, HOISTING & SCOPE

// console.log(nama);
// var nama 'Bayu';

// creation phase pada Global Context
// nama var = undefined
// nama function = fn()
// hoisting
// window = global Object
// this = window
// execution phase


// var nama = 'bayu';
// var umur = '19';
// function sayHallo() {
//     console.log(`Halo nama saya${nama}, saya umur${umur} tahun`);
// }

var nama = 'Bayu Dirgantara';
var username = '@baydirgan';

function cetakUrl(username) {
    var cetakUrl = 'http://instagram.com/';
    return cetakUrl + username;
}
console.log(cetakUrl(username));
