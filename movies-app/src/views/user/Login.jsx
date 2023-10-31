import React, { useRef, useState } from 'react'
import { Outlet,Link } from 'react-router-dom'
import axiosClient from '../../axios-client'
import { useStateContext } from '../../context/ContextProvider'
function Login() {
  const {setUser,setToken} = useStateContext();
  const [errors,setErrors]=useState(null);
  const email = useRef()
  const password = useRef()

  
  const onSubmit =(ev)=>{
      ev.preventDefault()
      const payload = {
        email:email.current.value,
        password:password.current.value,
      }
      axiosClient.post('/login',payload)
      .then(({data})=>{
        setUser(data.user)
        setToken(data.token)
        var jsonString = JSON.stringify(data.user);
        localStorage.setItem('user',jsonString)
        if(data.message){
          setErrors({
            email:[data.message]
          })
        }
        
      })
      .catch(err=>{
        const response = err.response;
        
        // 422 validation error
        if(response && response.status == 422){
          console.log(response.data.message)
          console.log(response.data.errors)
          if(response.data.errors){
            setErrors(response.data.errors)
           }
           //else{
          //   setErrors({
          //     email:[response.data.message]
          //   })
          // }
          
        }
      })
  }
  return (
    <div className='Register'>
    <div className='ReContainer'>
    <div className='Logo'>
      
    </div>
    <div className='LOGIN'>
      <div>
        <h2>LOGIN</h2>
        {/* <form onSubmit={onSubmit}>
        <div className='inp'>
            <input ref={email} type="email" placeholder='Email Address'/>
            <input ref={password} type="password" placeholder='password'/>
            <button>Login</button>
          </div>
        </form> */}
        <form id="formE" onSubmit={onSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" ref={email} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1"  class="form-label">Password</label>
    <input type="password" ref={password} class="form-control" id="exampleInputPassword1"/>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        <div className='signin'>IF YOU HAVE ALREADY ACCOUNT ?  <Link id='ty' to='SignUp'>LOGIN</Link> </div>
        </div>
              {errors && 
              <div className='Errors'>
               {Object.keys(errors).map(key=>(
                <p key={key}>{errors[key][0]}</p>
               )
              )
               }
             </div>
              }
              
             
    </div>
    </div>
</div>
  )
}

export default Login