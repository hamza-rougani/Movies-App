import React from 'react'
// import DisplayPage from './DisplayContent/DisplayPage'

import Header from '../views/Header'
import SideBar from '../views/SideBar/SideBar'
import { Outlet } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider'

function Container() {
  const {token,notification} = useStateContext();
  return (
    <div className='Container'>
      <SideBar/>
      <div className='sideBr'></div>
      <div className='ContainerALL'>
        <Header/>
        {/* <DisplayPage/> */}
        <div className='outlet'>
        <Outlet/>
        </div>
      </div>
      {notification && 
          <div className='notification'>
           {notification}
          </div>
    }
    </div>
  )
}

export default Container