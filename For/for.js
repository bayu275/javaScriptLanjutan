// for..of

// Array
// const mhs = ['Bayu','Dirgantara','Intan'];
// for (let i = 0; i < mhs.length; i++) {
//     console.log(mhs[i]);
// }

// mhs.forEach(m => console.log(m));

// for( const m of mhs ){
//     console.log(m);
// }

// String
// const nama = 'bayu';
// for (const n of nama) {
//     console.log(n);
    
// }

// const mhs = ['Bayu','Dirgantara','Intan'];
// mhs.forEach((m,i)=> {
//     console.log(`${m} adalah mahasiswa ke-${i+1}`);
// });

// for (const [i,m] of mhs.entries()) {
//     console.log(`${m} adalah mahasiswa ke-${i+1}`);
    
// }


// Node List

// const liNama = document.querySelectorAll('.nama');
// liNama.forEach(n => console.log(n.innerHTML))
// for (const n of liNama) {
//     console.log(n.innerHTML);
    
// }

// Arguments
// function jmlAngka() {
    // return arguments.reduce((a,i) => a + i);
    // jmlAngka.forEach(a => jml+= a);
//     let jml = 0;
//     for (const a of arguments) {
//         jml += a;
//     }
//     return jml;
// }
// console.log(jmlAngka(1,2,3,4,5,6));



// for in
const mhs = {
    nama: 'Bayu',
    umur: '19',
    email: 'bayu@mail.com'
}
for (const m in mhs) {
    console.log(mhs);
    // console.log(mhs[m]);
}