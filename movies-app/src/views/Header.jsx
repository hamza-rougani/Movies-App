import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider';
import axiosClient from '../axios-client';

function Header() {
  const [search,setSearch] = useState("")
  const navigate = useNavigate()
  const [keywords, setKeywords] = useState([]);
  const {token,user,setUser,setToken} = useStateContext()
  // const getUser = localStorage.getItem('user')
  // const traUser = JSON.parse(getUser)
  // console.log(traUser)
 useEffect(()=>{
  axios.get(`https://api.themoviedb.org/3/search/multi?api_key=d31630ae59160c861f33e3513178b8a5&query=${search}`)
    .then(({data}) =>{
        console.log(data.results)
        setKeywords(data.results)
      })
    .catch(err => console.error(err));
 },[search])
    
  const onhandelSearch =()=>{
    navigate(`/search?keywords=${search}`)
  }
  const onLogout = (E)=>{
    E.preventDefault()
    axiosClient.post('/logout')
        .then(()=>{
          localStorage.removeItem('user')
         setUser({})
         setToken(null)
        })
        .catch(err=>{
          console.log(err)
        })
      }
  return (
    <div className='Header'>
      <div className='i'>
      <i class='bx bx-chevron-left'></i>
      </div>
        
        <ul>
         <li id='search'>
              <div className='searchBarKey'>
              <input type="text" placeholder='Search movies' onChange={(e)=>setSearch(e.target.value)}/>
             {search.length>0?
              <div className='listkey'>
                <ul>
                {keywords.map((keyword) => (
                     <Link id="LinkLight" to={`/search?keywords=${keyword.name ? keyword.name: keyword.title}`}><li>{keyword.name ? keyword.name: keyword.title}</li></Link>
                     ))}
                     
                </ul>
              </div>
              :""}
              </div>
              
              <div className='searchiC1'>
          {/* <button className='searchbtn' onClick={onhandelSearch}><i class='bx bx-search-alt-2' ></i> </button> */}
          </div>
         </li>
          <li>
            
          
            </li>
          {/* <li>
            <div className='notif'></div>
            <i class='bx bx-bell'></i>
            </li> */}
            
          {/* <li style={{display:"flex",alignItems:"center",gap:"10px"}}> */}
          {/* <Link id="Link" to='/Profile'>
            <div className='profile'>
              <img src="https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
            </div>
            </Link> */}
            {/* <span style={{fontSize:"16px"}}>{traUser && traUser.name.split(" ")[0]}</span> */}
            {/* {token ?<button id='logout' onClick={onLogout}>Log out</button>:"" }
          {!token ?<Link to="/Login" id='Link'><button id='login'>Log in</button></Link>:"" } */}
          {/* </li> */}
          
          
          
      </ul>
            

    </div>
  )
}

export default Header