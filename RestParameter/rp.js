// Rest Parameter
// function myFunct() {
    // return `a = ${a} b = ${b} myArgs = ${myArgs}`;
    // return myArgs;
//     return [...arguments];  
// }
// console.log(myFunct(1,2,3,4,5));



// function jumlahkan(...angka) {
//     return angka.reduce((acc,curr) => acc+curr);
// }
// console.log(jumlahkan(1,2,3,4,5));


// array desctructuring
// const mhs1 = ['bayu','dirgantra','husen','fauzan'];
// const [ketua,wakil,...anggota] = mhs1;
// console.log(anggota);


// Object Destructuring
// const team = {
//     pm:'Bayu',
//     frontend1: 'doody',
//     frontend2: 'erik',
//     backend:'Fajar',
//     ux:'Hendra',
//     devOps:'Ferry'
// }

// const {pm, ...myTeam} = team;
// console.log(myTeam);


// filltering

function fillterBy(type, ...values) {
    return values.filter(v => typeof v === type);
}

console.log(fillterBy('string',1,2,'sandika',false,true,'doody'));