import React, { useEffect, useState } from 'react'
import SwiperC from '../Swiper/SwiperC'
import CartMv from './CartsMovies/CartMv'
import Footer from '../Footer/Footer'
import axios from 'axios';
import SlideImage from '../Swiper/SlideImage';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzE2MzBhZTU5MTYwYzg2MWYzM2UzNTEzMTc4YjhhNSIsInN1YiI6IjY0NjM4MjVlZTNmYTJmMDEwM2EyNmY5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0j9ghDyu58g8ZpInHAgOPfOm_05ZuwpMmcBgCE_swL8'
  }
};
function DisplayPage() {
  const [changepage,setchangepage] = useState(1)
  const [Movies,setMovies] = useState([])
  const [Rec,setRec] = useState([])
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/trending/all/day?language=en-US`, options)
    .then(({data}) =>{
      console.log(data.results)
      setMovies(data.results)
    })
    .catch(err => console.error(err));
    axios.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc`, options)
    .then(({data}) =>{
      console.log("Rec")
      console.log(data.results)
      setRec(data.results)
    })
    .catch(err => console.error(err));
  },[changepage])
  return (
    <div className='DisplayPage'>
      <div className='showMovies'>
         <div className='content'>
            <div className='circle'>
              <button id='btn'><i class='bx bx-wifi' ></i></button>
              <h1 id='e'>VIKINGS</h1>
              <h2 id='a'>The Saision Two</h2>
              <ul>
                <li>
                  
                  <div className='img'>
                    <img src="star.png" alt="" />
                  </div>
                  7.8
                  </li>
                <li>
                  <div className='img'>
                    <img src="eng.png" alt="" />
                  </div>
                  English
                </li>
              </ul>
              <button id='watch'>Watch Now</button>
            </div>
            <div className='ListofMv'>
          <SwiperC/>
         </div>
        
         </div>
         
      </div>
      <div className='ListOfMovies'>
      {/* <div className='keepwtc'>
        <div className='filter'>
          <div className='ul'>
            <button><div className='circle'> <i class='bx bx-time'></i></div><span>Newly added</span> </button>
            <button><div className='circle'> <i class='bx bx-user-voice' ></i></div><span>Most viewed</span> </button>
            <button><div className='circle'> <i class='bx bx-heart'></i></div><span>Most liked</span> </button>
            <button><div className='circle'> <i class='bx bx-objects-vertical-bottom'></i></div><span>Highest rated</span> </button>
           
          </div>
          </div>
          </div>
         */}
        <div className='slideImg'>
       <SlideImage mv={Rec && Rec}/>
       </div>
       {/* <div className='keepwtc'>
        <div className='filter'>
          <div className='ul'>
            <button><div className='circle'> <i class='bx bx-chevron-down'></i></div><span>Section</span> </button>
            <button><div className='circle'> <i class='bx bx-chevron-down'></i></div><span>Type</span> </button>
            <button><div className='circle'> <i class='bx bx-chevron-down'></i></div><span>Year</span> </button>
            <button><div className='circle'> <i class='bx bx-chevron-down'></i></div><span>Quality</span> </button>
           
          </div>
         </div>
        </div> */}
       <CartMv movies={Movies}/>
       <Footer/>
      </div>
    </div>
  ) 
}

export default DisplayPage