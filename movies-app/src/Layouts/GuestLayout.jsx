import React from 'react'
import Header from '../views/Header'
import SideBar from '../views/SideBar/SideBar'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider'
function GuestLayout() {
  const {token,notification} = useStateContext();
   if(token){
    return <Navigate to="/Home"/>
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
      {notification && 
          <div className='notification'>
           {notification}
          </div>
    }
    </div>
  )
}

export default GuestLayout