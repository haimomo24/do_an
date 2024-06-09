const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'




// B1: Call API server to local
const getApi = async (url) => {
  let response = await axios.get(url);
  // console.log(response.data.results);

  showMovie(response.data.results);

}

getApi(API_URL);

// B2: Show Movie to HTML
let rowJs = document.querySelector(".row-js");
// console.log(rowJs);

const showMovie = (data) => {
  let HTML = ``;
  data.forEach(value => {
    // console.log(value);
    HTML += `
    <div class="col-12 col-sm-6 col-md-3">

      <div class="wrap-movie">
        <a href="./detail.html?id=${value.id}">
            <div class="box-images">
            <img src="${IMG_PATH + value.poster_path}" alt="anh 1">
          </div>
          
          <div class="box-info">
            <h3>${value.title}</h3>
            <p class="rating ${startMovie(value.vote_average)}">${value.vote_average}</p>
          </div>

          <div class="overview">
            <h4>Overview</h4>
            <p class="description">
              ${value.overview}
            </p>
          </div>
        </a>
      </div>

    </div>
    `
  });

  // show movie coloumn to row row-js
  // console.log(HTML);
  rowJs.innerHTML = HTML;
}


// Movie Start

const startMovie = (vote) => {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 6) {
    return 'orange';
  } else {
    return 'red'
  }
}


// Chuc nang tim kiem
const form = document.querySelector('form');
const inputSearch = document.querySelector('.input-search');
// console.log(form);
// console.log(inputSearch);


form.addEventListener('submit', (event)=>{
  event.preventDefault(); //Bo loading mac dinh trinh duyet


  // B1: Lay gia tri cua ong nguoi dung search
  const searchTerm = inputSearch.value;
  console.log(searchTerm);

  if(searchTerm && searchTerm !== '') {

    getApi(SEARCH_API + searchTerm);
    
  }else {
    alert("Vui long nhap ten cua ban!");
  }
})