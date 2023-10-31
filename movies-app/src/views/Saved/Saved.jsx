import React, { useEffect, useState } from 'react'
import axiosClient from '../../axios-client'

function Saved() {
    const [Loading,setLoading]=useState([])
    const [Saved,setSaved]=useState(false)
    useEffect(()=>{
        setLoading(false)
        axiosClient.get("/saved")
        .then(({data})=>{
            setSaved(data.data)
            setLoading(true)

        })
      
    },[])
    if(Loading){
        // Saved.forEach(element => {
        //     console.log(element.type)
        //     if(element.type){
                
        //     }
        // });
        const [moviesData, setMoviesData] = useState([]);
        const [tvData, settvData] = useState([]);

        useEffect(() => {
          const fetchData = async () => {
            try {
                if(Saved.type=="movie"){
              const requests = Saved.map((movie) =>
                axios.get(`https://api.themoviedb.org/3/movie/${movie.moviesId}?api_key=d31630ae59160c861f33e3513178b8a5`)
              );
              const responses = await Promise.all(requests);
              const data = responses.map((response) => response.data);
              setMoviesData(data);
              console.log(data)
            }else{
                const requests = Saved.map((movie) =>
                axios.get(`https://api.themoviedb.org/3/tv/${movie.moviesId}?api_key=d31630ae59160c861f33e3513178b8a5`)
              ); 
              const responses = await Promise.all(requests);
              const data = responses.map((response) => response.data);
              settvData(data);
              console.log(data)
            }
      
              
            } catch (error) {
              console.log('Error fetching movie data:', error);
            }
          };
      
          fetchData();
        }, []);
      
       }
  return (
    <div className='Saved'>
        <div className='savedIntro'>
        <h1>Saved Movies</h1>
        <div className='button'>
            <button>Saved Movies</button>
            <button>Saved Tv</button>
        </div>
        </div>
        
    </div>
  )
}

export default Saved