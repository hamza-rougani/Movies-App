import React from 'react'

function Cart(e) {
  const mv = e.movies
  return (
    <div className='Card'>
              <div className='img'>
                <div className='episode'>
                <span style={{color:"yellow" ,fontSize:"20px"}}><i class='bx bxs-star'></i></span>
                <span>{mv.vote_average}</span>
                </div>
                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${mv.poster_path}`} alt="" />
              </div>
              <div className='txt'>
              <i class='bx bx-play-circle'></i>
                <span id='title'>{mv.title ?mv.title:mv.name}</span>
                <span id='des'>
                {mv.overview}
                </span>
              </div>
  </div>
  )
}

export default Cart