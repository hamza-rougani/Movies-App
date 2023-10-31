import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import CartMv from '../DisplayContent/CartsMovies/CartMv';
function searchpage() {
const location = useLocation();
const searchParams = new URLSearchParams(location.search);
const key = searchParams.get("key");
const genreMovie = searchParams.get("genreMovie");
const keywords = searchParams.get("keywords");
const [Movies,setMovies] = useState([]) 
useEffect(()=>{
  // https://api.themoviedb.org/3/search/collection?query=${key}&include_adult=false&language=en-US&page=1
  if(key){
    axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=d31630ae59160c861f33e3513178b8a5&with_genres=${key}&page=1`)
    .then(({data}) =>{
        console.log(data.results)
        setMovies(data.results)
      })
    .catch(err => console.error(err));
  }else if(genreMovie){
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=d31630ae59160c861f33e3513178b8a5&with_genres=${genreMovie}&page=1`)
    .then(({data}) =>{
        console.log(data.results)
        setMovies(data.results)
      })
    .catch(err => console.error(err));
  }else{
    axios.get(`https://api.themoviedb.org/3/search/multi?api_key=d31630ae59160c861f33e3513178b8a5&query=${keywords}`)
    .then(({data}) =>{
        console.log(data.results)
        setMovies(data.results)
      })
    .catch(err => console.error(err));
  }
    
},[key,genreMovie,keywords])

  return (
    <div className='searchpage'>
        <CartMv movies={Movies}/>
    </div>
  )
}

export default searchpage