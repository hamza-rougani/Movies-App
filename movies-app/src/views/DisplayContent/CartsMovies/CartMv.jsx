import React,{ useEffect, useState }  from 'react'
import Cart from './Cart'
import axios from 'axios';
import { Link } from 'react-router-dom';

function CartMv(e) {

  return (
    <div className='ListMv'>
    <div className='CardMv'>
      
      {e.movies.map(mv=><Link id="Link" to={`/movie?${mv.media_type ? mv.media_type:"tv"}=${mv.id}`}><Cart movies={mv}/></Link>)}
    </div>
  </div>
  )
}

export default CartMv