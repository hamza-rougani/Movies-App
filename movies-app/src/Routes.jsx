import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import DisplayPage from './views/DisplayContent/DisplayPage'
import Container from './Layouts/Container'
import SearchPage from './views/search/searchpage'
import Show from './views/Show/Show'
import Login from './views/user/Login'
import SignUp from './views/user/SignUp'
import GuestLayout from './Layouts/GuestLayout'
import Profile from './views/Profile/Profile'
import DefaultLayout from  './Layouts/DefaultLayout'
import Saved from './views/Saved/Saved'
function RoutesApp() {
  return (
    <Routes>
      <Route path='/' element={<GuestLayout/>}>
           <Route path='/' element={<Navigate to='/Home'/>}/>
           <Route path='/Login' element={<Login/>}/>
           <Route path='/SignUp' element={<SignUp/>}/>
        </Route>
        <Route path='/' element={<DefaultLayout/>}>
           <Route path='/Profile' element={<Profile/>}/>
           <Route path='/Saved' element={<Saved/>}/>
        </Route>
        <Route path='/' element={<Container/>}>
            <Route path='/Home' element={<DisplayPage/>}/>
            <Route path='/search' element={<SearchPage/>}/>
            <Route path='/movie' element={<Show/>}/>
        </Route>
    </Routes>
  )
}

export default RoutesApp