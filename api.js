const apikey='api_key=a0ce567f065300dd0ab70fc821b656ef';
const baseUrl='https://api.themoviedb.org/3';
const imgUrl='https://image.tmdb.org/t/p/w500/';

const requests={
    fetchTrending:`${baseUrl}/trending/all/day?${apikey}&language=en-US`,
    fetchComedyMovie:`${baseUrl}/discover/movie?${apikey}&with_geners=27`,
}
fetch(requests.fetchTrending)
.then(res=>res.json())
.then((data)=>{
    var bannermovi=data.results[Math.floor(Math.random()*data.results.length-1)];
    console.log(bannermovi);
    document.getElementById("title").innerHTML=bannermovi.title?bannermovi.title:bannermovi.name;
    document.getElementById("desc").innerHTML=bannermovi.overview.substr(0,55);
    document.getElementById("Fsecmovi").style.backgroundImage=`url(${imgUrl+bannermovi.backdrop_path})`;
});
fetch(requests.fetchComedyMovie)
.then(res=>res.json())
.then((data)=>{
    console.log(data)
data.results.forEach(movie => {
    const movieslider=document.getElementById("ComedyMovies");
    const div=document.createElement('div');
    div.classList.add("swiper-slide");
    movieslider.appendChild(div);
    div.innerHTML=
    `<img src=${imgUrl+movie.backdrop_path} alt="" class="movieimg">`    
    // <div class="detailsDiv">
    // <img src=${imgUrl+movie.backdrop_path} alt="" class="movieimg">
    // <div class="detailss">
    //   <div class="iconsdetail">
    //     <div>
    //       <i class="fa-solid fa-play"></i>
    //       <i class="fa-solid fa-plus"></i>
    //       <i class="fa-solid fa-thumbs-up"></i>
    //       <i class="fa-solid fa-thumbs-down"></i>
    //     </div>
    //     <i class="fa-solid fa-caret-down"></i>
    //   </div>
    //   <h3>${movie.original_title?movie.original_title:movie.name}</h3>
    //   <p>${movie.overview.substr(0,55)}</p>
    // </div>
    // </div>

});
})