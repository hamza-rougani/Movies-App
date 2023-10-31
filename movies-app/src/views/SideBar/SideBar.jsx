import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
function SideBar() {
function MoviesDrop(){
  const li = document.querySelector('.liContainer')
  li.classList.toggle('ActiveMvDp')
}
function MoviesDrop1(){
  const li = document.querySelector('.liContainer1')
  li.classList.toggle('ActiveMvDp1')
}
const CheckLi = (e)=>{
  let lii =  e.target.className.split(' ')
 const lia = document.querySelectorAll('.liT')
 
 for(var i = 0;i<lia.length;i++){
  let ty = lia[i].className.split(' ')[0]
  if(ty=='liT' && lii[1]!=lia[i].className.split(' ')[1]){
    lia[i].style.background='black'
  }else{
    lia[i].style.backgroundColor= "rgb(95, 43, 226)";
  }

 }

}

  return (
    <div className='SideBar'>
      <div className='logo'>
        <div className='img'>
          <img src="https://t4.ftcdn.net/jpg/03/34/40/23/360_F_334402361_sN7Ni26mWNQTdsUrWFwmpfN4N2lAfijN.jpg" alt="" />
        </div>
        <div className='Est'>Estivanico<span>Tv</span></div>
      </div>
      <div className='List'>
      <span id='listOf'>List of tools</span>
      <ul className='ulTools'>
        <Link id="Link" to='/'><li onClick={CheckLi} className='liT li1'><i class='liT li1 bx bx-home'></i> Home</li></Link>
        <div className='liContainer' onClick={MoviesDrop}>
        <li id='special' onClick={CheckLi} className='liT li2'><div className='liT li2 movieDow'><i class='liT li2 bx bx-movie-play'></i>Series </div> <i class='liT li2 bx bx-chevron-down'></i></li>
        <div className='slideDown'>
          <ul>
            {/* <Route to="/animation"><li>animation</li></Route> */}
            {/* <Link id="Link" to='/search?key=28'><li>Action</li></Link> */}
            {/* <Link id="Link" to='/search?key=12'><li>Adventure</li></Link> */}
            <Link id="Link" to='/search?key=16'><li>Animation</li></Link>
            <Link id="Link" to='/search?key=35'><li>Comedy</li></Link>
            <Link id="Link" to='/search?key=80'><li>Crime</li></Link>
            <Link id="Link" to='/search?key=99'><li>Documentary</li></Link>
            <Link id="Link" to='/search?key=18'><li>Drama</li></Link>
            <Link id="Link" to='/search?key=10751'><li>Family</li></Link>
            {/* <Link id="Link" to='/search?key=14'><li>Fantasy</li></Link> */}
            <Link id="Link" to='/search?key=36'><li>History</li></Link>
            {/* <Link id="Link" to='/search?key=27'><li>Horror</li></Link> */}
            <Link id="Link" to='/search?key=10402'><li>Music</li></Link>
            <Link id="Link" to='/search?key=9648'><li>Mystery</li></Link>
            <Link id="Link" to='/search?key=10749'><li>Romance</li></Link>
            {/* <Link id="Link" to='/search?key=878'><li>Science Fiction</li></Link> */}
            {/* <Link id="Link" to='/search?key=10770'><li>TV Movie</li></Link> */}
            {/* <Link id="Link" to='/search?key=53'><li>Thriller</li></Link> */}
            {/* <Link id="Link" to='/search?key=10752'><li>War</li></Link> */}
            <Link id="Link" to='/search?key=37'><li>Western</li></Link>
           
          </ul>
        </div> 
         </div>
         <div className='liContainer1' onClick={MoviesDrop1}>
        <li id='special' className='liT li3' onClick={CheckLi}><div className='liT li3 movieDow'><i class='liT li3 bx bx-slideshow'></i> Movies</div><i class='liT li3 bx bx-chevron-down'></i></li>
         <div className='slideDown'>
          <ul>
          
            <Link id="Link" to='/search?genreMovie=28'><li>Action</li></Link>
            <Link id="Link" to='/search?genreMovie=12'><li>Adventure</li></Link>
            <Link id="Link" to='/search?genreMovie=16'><li>Animation</li></Link>
            <Link id="Link" to='/search?genreMovie=35'><li>Comedy</li></Link>
            <Link id="Link" to='/search?genreMovie=80'><li>Crime</li></Link>
            <Link id="Link" to='/search?genreMovie=99'><li>Documentary</li></Link>
            <Link id="Link" to='/search?genreMovie=18'><li>Drama</li></Link>
            <Link id="Link" to='/search?genreMovie=10751'><li>Family</li></Link>
            <Link id="Link" to='/search?genreMovie=14'><li>Fantasy</li></Link>
            <Link id="Link" to='/search?genreMovie=36'><li>History</li></Link>
            <Link id="Link" to='/search?genreMovie=10402'><li>Music</li></Link>
            <Link id="Link" to='/search?genreMovie=9648'><li>Mystery</li></Link>
            <Link id="Link" to='/search?genreMovie=10749'><li>Romance</li></Link>
            <Link id="Link" to='/search?genreMovie=878'><li>Science Fiction</li></Link>
            <Link id="Link" to='/search?genreMovie=10770'><li>TV Movie</li></Link>
            <Link id="Link" to='/search?genreMovie=53'><li>Thriller</li></Link>
            <Link id="Link" to='/search?genreMovie=10752'><li>War</li></Link>
            <Link id="Link" to='/search?genreMovie=37'><li>Western</li></Link>
           
          </ul>
        </div>
        </div>
        <Link to="/Saved" id='Link'><li onClick={CheckLi} className='liT li4'> <i class='liT li4 bx bx-play-circle'></i> Saved</li></Link>
        {/* <li onClick={CheckLi} className='liT li5'><i class='liT li5 bx bx-time-five' ></i> latest views</li> */}
      </ul>
      <hr />
      <span id='listOf'>Actors</span>
      <ul className='ul'>
      
        <li >
        <div className='name'>
        <div className='actr'>
          <img src="https://blogsenclasse.fr/23-bourganeuf-college-jeanpicartledoux-club-journal/wp-content/uploads/sites/361/2021/01/Ragnar.jpg" alt="" />
          </div>
          Travis Fimmel
          </div>
          <div className='ex'></div>
          </li>
        <li >
        <div className='name'>
        <div className='actr'>
          <img src="https://static.onecms.io/wp-content/uploads/sites/6/2015/02/alexander-ludwig-vikings_0.jpg" alt="" />
          </div>
          Alexander Ludwig
          </div>
          <div className='ex'></div>
          </li>
        <li >
        <div className='name'>
        <div className='actr'>
          <img src="https://cropper.watch.aetnd.com/cdn.watch.aetnd.com/sites/2/2016/10/vikings_season4_cast_lagertha.jpg" alt="" />
          </div>
          Katheryn Winnick
          </div>
          <div className='ex'></div>
          </li>
        <li >
        <div className='name'>
        <div className='actr'>
          <img src="https://mythologian.net/wp-content/uploads/2017/02/real-floki-from-vikings-1024x657.jpg" alt="" />
          </div>
          Gustaf Skarsgård
          </div>
          <div className='ex'></div>
          </li>
        <li id='d'>
        <div className='name'>
        <div className='more'>
        <i class='bx bx-chevron-down'></i>
          </div>
          Load more
          </div>
          </li>
      </ul>
      
      </div>
    </div>
  )
}

export default SideBar