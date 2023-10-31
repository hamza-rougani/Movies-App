import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider';
import Header from '../views/Header'
import SideBar from '../views/SideBar/SideBar'

function DefaultLayout() {
  const {token,notification} =  useStateContext()

  if(!token){
    return <Navigate to="/Login"/>
      
  }
 
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
    </div>
  )
}

export default DefaultLayout