// 1 HTML Fragments

// const mhs = {
//     nama : 'Bayu Dirgantara',
//     umur : 19,
//     nrp : '10101010',
//     email : 'bayuusetiawan86@gmail.com'
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nrp}</span>
// </div>`;

// 2. Looping

// const mhs = [
//     {
//         nama: 'Bayu Dirgantara',
//         email : 'bayuusetiawan86@gmail.com'
//     },
//     {
//         nama: 'Doody',
//         email : 'bayuusetiawan86@gmail.com'
//     },
//     {
//         nama: 'Erik',
//         email : 'bayuusetiawan86@gmail.com'
//     }
// ]

// const el = `<div class="mhs">
//     ${mhs.map(e => `<ul>
//         <li>${e.nama}</li>
//         <li>${e.email}</li>
//     </ul>`).join('')}
// </div>`

// 3. Conditional
// ternary

// const lagu = {
//     judul:'tetap dalam jiwa',
//     penyanyi:'Insyana Sarasvati',
//     feat: 'Rayi putra'
// }
// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `(feat.${lagu.feat})`: ``}</li>
//     </ul>
// </div>`


// 4. Nested 
// HTML Fragments bersarang

// const mhs ={
//     nama : 'Bayu Dirgantara',
//     semester: 5,
//     mataKuliah:['Rekayasa Web','Perancangan Sistem Informasi','Pemograman Sistem Interaktif','Sistem Berorientasi Objek']
// }
// function cetakMataKuliah(matakuliah) {
//     return `
//     <ol>
//         ${matakuliah.map(mk => `<li>${mk}</li>`).join('')}
//     </ol>
//     `
// }
// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="seme">Semester : ${mhs.semester}</span>
//     <h4>Mata Kuliah</h4>
//     ${cetakMataKuliah(mhs.mataKuliah)}
// </div>`

// document.body.innerHTML = el;


// Tagged template
// const nama = 'Bayu Dirgantara';
// const umur = 19;

// function coba(strings, ...values) {
//     // let result = '';
//     // strings.forEach((str,index) => {
//     //     result += `${str}${values[index]|| ''}`
//     // });
//     // return result;
//     return strings.reduce((result,str,i)=> `${result}${str}${values[i] || ''}`);
// }

// const str = coba`Halo nama saya ${nama}, umur ${umur} tahun`;
// console.log(str);


// Higlight

const nama = 'Bayu Dirgantara';
const umur = 19;
const email = 'bayuusetiawan86@gmail.com';

function higlight(strings, ...values) {
    return strings.reduce((result,str,i)=> `${result}${str}<span class="hl">${values[i] || ''}</span>`,'');
}
const str = higlight`Halo nama saya ${nama}, umur ${umur} tahun dan email saya adalah : ${email}`;
document.body.innerHTML = str;