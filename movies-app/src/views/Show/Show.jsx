import React, { useEffect, useState } from 'react'
import Swiperpersons from '../Swiper/swiperpersons'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import axiosClient from '../../axios-client'
import { useStateContext } from '../../context/ContextProvider'

function Show() {
    const location = useLocation()
    const paramsUrl = new URLSearchParams(location.search) 
    const movie = paramsUrl.get("movie")
    const tv = paramsUrl.get("tv")
    const [Movies,setMovies] = useState([])
    const [Recomm,setRecomm] = useState([])
    const [Trailler,setTrailler] = useState([])
    const [Actors,setActors] = useState([])
    const [Loading,setLoading] = useState(false)
    const [LoadAct,setLoadAct] = useState(false)
    const {setNotification} = useStateContext()
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzE2MzBhZTU5MTYwYzg2MWYzM2UzNTEzMTc4YjhhNSIsInN1YiI6IjY0NjM4MjVlZTNmYTJmMDEwM2EyNmY5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0j9ghDyu58g8ZpInHAgOPfOm_05ZuwpMmcBgCE_swL8'
        }
      };
    //   useEffect(()=>{
    //     setLoading(false)
    //       axios.get(`https://api.themoviedb.org/3/movie/${movie ?movie:tv}?language=en-US`, options)
    //       .then(({data}) =>{
    //           console.log(data)
    //           setMovies(data)
    //           setLoading(true)
              
    //         })
    //       .catch(err => console.error(err));
    //       axios.get(`https://api.themoviedb.org/3/movie/${movie ?movie:tv}/recommendations?language=en-US&page=1`, options)
    //       .then(({data}) =>{
    //           console.log(data)
    //           setRecomm(data.results) 
    //         })
    //       .catch(err => console.error(err));

    //       axios.get(`https://api.themoviedb.org/3/movie/${movie ?movie:tv}/videos?language=en-US`, options)
    //       .then(({data}) =>{
    //           console.log(data.results)
    //           setTrailler(data.results) 
    //         })
    //       .catch(err => console.error(err));
    //       axios.get(`https://api.themoviedb.org/3/movie/${movie ?movie:tv}/credits?language=en-US`, options)
    //       .then(({data}) =>{
    //           console.log(data.cast)
    //           setActors(data) 
    //           setLoadAct(true)
    //         })
    //       .catch(err => console.error(err));
          
    //   },[movie])
    //   if(Loading){
    //     var year = Movies.release_date.split('-')
    //   }

    if(movie){
        console.log(movie)
        useEffect(()=>{
            setLoading(false)
              axios.get(`https://api.themoviedb.org/3/movie/${movie}?language=en-US`, options)
              .then(({data}) =>{
                  console.log(data)
                  setMovies(data)
                  setLoading(true)
                  
                })
              .catch(err => console.error(err));
              axios.get(`https://api.themoviedb.org/3/movie/${movie}/recommendations?language=en-US&page=1`, options)
              .then(({data}) =>{
                  console.log(data)
                  setRecomm(data.results) 
                })
              .catch(err => console.error(err));

              axios.get(`https://api.themoviedb.org/3/movie/${movie}/videos?language=en-US`, options)
              .then(({data}) =>{
                  console.log(data.results)
                  setTrailler(data.results) 
                })
              .catch(err => console.error(err));
              axios.get(`https://api.themoviedb.org/3/movie/${movie}/credits?language=en-US`, options)
              .then(({data}) =>{
                  console.log(data.cast)
                  setActors(data) 
                  setLoadAct(true)
                })
              .catch(err => console.error(err));
          },[movie])
          if(Loading){
            var year = Movies.release_date.split('-')
          }
          
    }else{
        useEffect(()=>{
            setLoading(false)
              axios.get(`https://api.themoviedb.org/3/tv/${tv}?language=en-US`, options)
              .then(({data}) =>{
                  console.log(data)
                  setMovies(data)
                  setLoading(true)
                  
                })
              .catch(err => console.error(err));
              axios.get(`https://api.themoviedb.org/3/tv/${tv}/recommendations?language=en-US&page=1`, options)
              .then(({data}) =>{
                  console.log(data)
                  setRecomm(data.results) 
                })
              .catch(err => console.error(err));

              axios.get(`https://api.themoviedb.org/3/tv/${tv}/videos?language=en-US`, options)
              .then(({data}) =>{
                  console.log(data.results)
                  setTrailler(data.results) 
                })
              .catch(err => console.error(err));
              axios.get(`https://api.themoviedb.org/3/tv/${tv}/credits?language=en-US`, options)
              .then(({data}) =>{
                  console.log(data.cast)
                  setActors(data) 
                  setLoadAct(true)
                })
              .catch(err => console.error(err));
            },[movie])
            if(Loading){
                var year = Movies.last_air_date.split('-')
              }
    }
    useEffect(()=>{
      saved()
    },[])
    const saved = ()=>{
    if(movie){
 let idMv = {"moviesId":Movies.id,"type":"movie"}
    axiosClient.post('/saved',idMv)
    .then(({data})=>{
      console.log(data)
      setNotification("the movie has been added as favorite movies")
    })
    .catch(err=>{
      console.log(err)
      setNotification("the movie has been already added")
    })
    console.log(movie)
    }else{
 let idMv = {"moviesId":Movies.id,"type":"tv"}
    axiosClient.post('/saved',idMv)
    .then(({data})=>{
      console.log(data)
      setNotification("the serie has been added as favorite series")
    })
    .catch(err=>{
      console.log(err)
      setNotification("the serie has been already added")
    })
    }
   
    }
  return (
    <div className='Show'>
        <div className='containerShow'>
            <div className='contentShow'>
                <div className='imgss'>
                    <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${Movies.poster_path}`} alt="" />
                </div>
                <div className='textshow'>
                    <div className='title'>
                    <h2>{Movies.title ? Movies.title :Movies.name} ({Loading ? year[0]:""})</h2>
                    <div className='Rated'>
                        <div className='img'>
                        <img  src="star.png" alt=""  />
                        {Movies.vote_average ? Movies.vote_average :""}
                        </div>
                    </div>
                    </div>
                    <div className='cate'>
                        <ul>
                            {Loading ?Movies.genres.map(t=><li>{t.name}</li>):""}
                            
                            <li id="hours">1h 31m</li>
                        </ul>
                        
                    </div>
                    <div className='overview'>
                        <h3>overview</h3>
                        <div className='detail'>{Movies.overview}</div>
                    </div>
                    <div className='evaluation'>
                       <div className='ic'><i class='bx bx-like'></i></div>
                       <div className='ic' onClick={saved}><i class='bx bx-bookmark'></i></div>
                       <div className='ic'><i class='bx bx-list-ul' ></i></div>
                       <div className='year'>{Movies.release_date ? Movies.release_date:Movies.last_air_date}</div>
                       <div className='year t'><i class='bx bx-play-circle' ></i> Start Trailler</div>
                    </div>
                    
                </div>
                
            </div>

        </div>
        <div className='other'>
        {tv ? <>
          <h2>All seasons</h2>
          <div className='Team'>
            <ul>
                <Swiperpersons mov = {Movies.seasons} type="Reco"/>
                
                {/* <li>{r.name} <div className='cir'>1</div></li> */}
            </ul>
            <br></br>
            <ul className='epi'>
                {Movies.number_of_episodes && Movies.number_of_episodes}
                
            </ul>
            
          </div>
          </>:""}
          <h2>Actors</h2>
          <div className='Team'>
            <Swiperpersons mov = {LoadAct? Actors.cast:[]} type="Actors"/>
          </div>
          <h2>Work Team</h2>
          <div className='Team'>
            <Swiperpersons mov = {LoadAct? Actors.crew:[]} type="Actors"/>
          </div>
          <h2>Trailler</h2>
          <div className='Team'>
          <iframe width="100%" height="315"
            src={`https://www.themoviedb.org/video/play?key=${Trailler.length!=0 ?Trailler[0].key:""}`}>
         </iframe>
          </div>
          <h2>Recommendations</h2>
          <div className='Team'>
          <Swiperpersons mov = {Recomm} type="Recomm"/>
          </div>
        </div>
    </div>
  )
}

export default Show