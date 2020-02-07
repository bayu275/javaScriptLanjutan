// Callbacks
// Synchronous Callback

// function hallo(nama) {
//     alert(`Halo ${nama}`);
// }

// function tampilkanPesan(callback) {
//     const nama = prompt('Masukan Nama')
//     callback(nama);
// }

// tampilkanPesan(nama => alert(`Halo, ${nama}`));



// const mhs = [
//     {
//         'nama':'Bayu Dirgantara',
//         'nrp': '10101010',
//         'email':'bayu@gmail.com',
//         'jurusan':'Teknik Informatika',
//         'idDosenWali':'1'
//     },
//     {
//         'nama':'Doody Ferdiansyah',
//         'nrp': '20202020',
//         'email':'doody@gmail.com',
//         'jurusan':'Teknik Informatika',
//         'idDosenWali':'2'
//     },
//     {
//         'nama':'Erik',
//         'nrp': '30303030',
//         'email':'erik@gmail.com',
//         'jurusan':'Teknik Industri',
//         'idDosenWali':'3'
//     }
// ];

// console.log('mulai');

// mhs.forEach(m => {
//     for (let i = 0; i < 10000000 ; i++) {
//         let date = new Date();
//     }
//     console.log(m.nama)
// });
// console.log('selesai');

// Asychronous Callback
// function getDataMahasiswa(url,succes,error) {
//     let xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function () {
//         if( xhr.readyState ===4 ){
//             if( xhr.status === 200 ){
//                 succes(xhr.response);
//             }else if (xhr.status === 404){
//                 error();
//             }
//         }
//     }

//     xhr.open('get',url,);
//     xhr.send();
// }
// console.log('mulai');

// getDataMahasiswa('data/mahasiswa.json',result =>{
//     const mhs = JSON.parse(result);
//     mhs.forEach(m => console.log(m.nama));
// }), () =>{};
// console.log('selesai');



// JQuery
console.log('mulai');
$.ajax({
    url: 'data/mahasiswa.json',
    success: (mhs) =>{
        mhs.forEach(m => console.log(m.nama))
        console.log(mhs);
    },erorr: () =>{

    }
})
console.log('selesai');





