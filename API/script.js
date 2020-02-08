
// Ajax support Jquery

// $('.search-btn').on('click',function () {  
//     $.ajax({
//         url: 'http://www.omdbapi.com/?apikey=f92ebe5a&s='+ $('.input-keyword').val(),
//         success: result => {
//             const movies = result.Search;
//             let cards = '';
//             movies.forEach(m => {
//                 cards += showCards(m);
//             })
//             $('.movie-container').html(cards);
    
//             // ketika detail di klik
//             $('.modal-detail-button').on('click', function () {
//                 $.ajax({
//                     url: 'http://www.omdbapi.com/?apikey=f92ebe5a&i=' + $(this).data('imdbid'),
//                     success: m => {
//                         const movieDetail = showDetail(m);
//                         $('.modal-body').html(movieDetail);
//                     },
//                     error: e => {
//                         console.log(e.responseText);
//                     }
//                 })
//             })
//         },
//         error: (e) => {
//             console.log(e.responseText);
//         }
//     })

// })


// Fecth
// const searchBtn = document.querySelector('.search-btn');
// searchBtn.addEventListener('click',function () {
//     // ambil semua dengan details
//     const inputKeyword = document.querySelector('.input-keyword');
//     fetch('http://www.omdbapi.com/?apikey=f92ebe5a&s='+inputKeyword.value)
//     .then(response => response.json())
//     .then(response => {
//         const movies = response.Search;
//         let cards = '';
//         movies.forEach(m => cards += showCards(m));
//         const cMovie = document.querySelector('.movie-container');
//         cMovie.innerHTML = cards;
//         const btnSearch = document.querySelectorAll('.modal-detail-button');
//         btnSearch.forEach(e => {
//             e.addEventListener('click',function () {
//                 const imdbid = this.dataset.imdbid;
//                 fetch('http://www.omdbapi.com/?apikey=f92ebe5a&i='+imdbid)
//                 .then(response => response.json())
//                 .then(m => {
//                     const movieDetail = showDetail(m)
//                     const modal = document.querySelector('.modal-body');
//                     modal.innerHTML = movieDetail;
//                 });
//             })
//         })
//     })
// })


const searchButton = document.querySelector('.search-btn');
searchButton.addEventListener('click', async function(){
    const inputKeyword = document.querySelector('.input-keyword');
    const movies = await getMovies(inputKeyword.value);
    updateUI(movies);
});

// event binding
document.addEventListener('click', async function (e) {
    if(e.target.classList.contains('modal-detail-button')){
        const imdbid = e.target.dataset.imdbid;
        const movieDetail = await getMovieDetail(imdbid);
        updateUIDetail(movieDetail)
    }
});

function getMovieDetail(imdbid) {
    return fetch('http://www.omdbapi.com/?apikey=f92ebe5a&i='+imdbid)
        .then(response => response.json())
}

function updateUIDetail(keyword) {
    const movieDetail = showDetail(keyword)
    const modal = document.querySelector('.modal-body');
    modal.innerHTML = movieDetail;  
};


function getMovies(keyword){
    return fetch('http://www.omdbapi.com/?apikey=f92ebe5a&s='+keyword)
    .then(response => response.json())
    .then(response => response.Search);
}

function updateUI(movies){
    let cards = '';
        movies.forEach(m => cards += showCards(m));
        const cMovie = document.querySelector('.movie-container');
        cMovie.innerHTML = cards;
}



function showCards(m) {    
    return `<div class="col-md-4 my-5">
                <div class="card">
                    <img src="${m.Poster}" class="card-img-top">
                    <div class="card-body">
                    <h5 class="card-title">${m.Title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                    <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
                    </div>
                </div>
            </div>`
}

function showDetail(m) {
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${m.Poster}" class="img-fluid">
                    </div>
                    <div class="col-md">
                    <ul class="list-group">
                        <li class="list-group-item"><h4>${m.Title} ${m.Year}</h4></li>
                        <li class="list-group-item"><strong>Director :</strong>${m.Director}</li>
                        <li class="list-group-item"><strong>Actors :</strong>${m.Actors}</li>
                        <li class="list-group-item"><strong>Writers :</strong>${m.Writer}</li>
                        <li class="list-group-item"><strong>Plot :</strong><br>${m.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`
}