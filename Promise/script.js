// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=f92ebe5a&s=avengers',
//     success: movies => console.log(movies)
// })

// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if (xhr.status === 200) {
//         if (xhr.readyState === 4) {
//             console.log(JSON.parse(xhr.response));
//         }
//     }else{
//         console.log(xhr.responseText);
//     }
// }
// xhr.open('get','http://www.omdbapi.com/?apikey=f92ebe5a&s=avengers');
// xhr.send();

// fetch('http://www.omdbapi.com/?apikey=f92ebe5a&s=avengers')
// .then(response => response.json())
// .then(response => console.log(response));

// Promise
// Object yang merepresentasikan keberhasilan / kegagalan sebuah event dari yang asynchronus di masa yang akan datang
// janji(terpenuhi,ingkarjanji)
// states (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)


// contoh 1
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         resolve('Janji telah ditepati');
//     }else{
//         reject('ingkar janji');
//     }
// })

// janji1
// .then(response => console.log('Ok : ' + response))
// .catch(response => console.log('Not OK :'+response));

// Contoh 2
// let ditepati = false;
// const janji2 = new Promise((resolve,reject) =>{
//     if (ditepati) {
//         setTimeout(()=>{
//             resolve('Ditepati tapi setelah beberapa waktu')
//         },2000)
//     }else{
//         setTimeout(()=>{
//             resolve('tidak ditepati tapi setelah beberapa waktu')
//         },2000)
//     }
// })

// console.log('mulai');
// console.log(janji2.then(()=> console.log(janji2)));
// janji2
// .finally(() => console.log('selesai menunggu'))
// .then(response => console.log('OK :' + response))
// .catch(response => console.log('Not OK :' + response));
// console.log('selesai');



// Promise.all()
const film = new Promise(resolve => {
    setTimeout(()=> {
        resolve([{
            judul: 'Avengers',
            sutradara: 'Bayu',
            pameran: 'Doody, Erik'
        }]);
    },1000);
});

const cuaca = new Promise(resolve => {
    setTimeout(()=>{
        resolve([{
            kota:'Bandung',
            temperatur: 26,
            kondisi: 'Cerah dan berawan'
        }]);
    },500);
})

// film
// .then(response => console.log(response));
// cuaca
// .then(response => console.log(response));

Promise.all([film,cuaca])
// .then(response => console.log(response));
.then(response => {
    const [film,cuaca] = response;
    console.log(film);
    console.log(cuaca);
})