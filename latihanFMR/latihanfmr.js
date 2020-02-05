// ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));
// pilih hanya yang JavaScript Lanjutan 
let jsLanjutan = videos.filter(e => e.innerHTML.includes('JAVASCRIPT LANJUTAN'))
// ambil durasi masing masing video
.map(e => e.dataset.duration)
// ubah durasi menjadi int, ubah menit menjadi detik
.map(waktu => {
    // 10:30 -> [10,30] split
    const parts = waktu.split(':').map(part => parseInt(part))
    return ( parts[0] * 60 + parts[1] );
})
// jumlahkan semua detiknya
.reduce((acc,curr)=> acc + curr);
// ubah format nya jadi jam,menit,detik
const jam = Math.floor(jsLanjutan / 3600);
jsLanjutan = jsLanjutan - jam * 3600;
const menit = Math.floor(jsLanjutan / 60);
const detik = jsLanjutan - menit * 60;
// simpan ke DOM
const jmlVideo = document.querySelector('.jumlah-video');
const ttlDurasi = document.querySelector('.total-durasi');
const total = videos.filter(e => e.innerHTML.includes('JAVASCRIPT LANJUTAN')).length;
jmlVideo.innerHTML = `${total} Video.`;
ttlDurasi.innerHTML = `${jam} Jam,${menit} Menit,${detik} Detik`;
