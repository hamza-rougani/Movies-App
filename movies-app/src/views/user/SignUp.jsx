import React, { useRef, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import axiosClient from '../../axios-client'
import { useStateContext } from '../../context/ContextProvider'

function SignUp() {
  const {setUser,setToken} = useStateContext();
  const [Errors,setErrors]=useState(false);
  const Name = useRef()
  const email = useRef()
  const password = useRef()
  const passwordCon = useRef()
  const phone = useRef()
  const address = useRef()
  const city = useRef()
  
  const onSubmit =(ev)=>{
      ev.preventDefault()
      const payload = {
        name:Name.current.value,
        email:email.current.value,
        password:password.current.value,
        password_confirmation:passwordCon.current.value,

        
      }
      axiosClient.post('/signup',payload)
      .then(({data})=>{
        setUser(data.user)
        setToken(data.token)
        
      })
      .catch(err=>{
        const response = err.response;
        if(response && response.status==422){
          setErrors(response.data.errors)
        }
      })
  }
  return (
    <div>
       <div className='Register'>
        <div className='ReContainer'>
        <div className='signUp'>
            
            {/* <form onSubmit={onSubmit}>
              <div className='inp'>
                <input ref={Name} type="text" placeholder='Full Name'/>
                <input ref={email} type="email" placeholder='Email Address'/>
                <input ref={password} type="password" placeholder='password'/>
                <input ref={passwordCon} type="password" placeholder='password confirmation'/>
              </div>
              <div className='inp'>
                <input ref={phone} type="number" placeholder='number phone'/>
                <input  type="text" placeholder='City'/>
                <input ref={address} name="" id="textarea" type="text" placeholder='full address'/>
                
                <button>Sign up</button>
                
                </div>
                
            </form> */}

            <form onSubmit={onSubmit}>
            <h2>REGISTER</h2>
            <div className='form'>
  <div className='nami'>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" ref={Name} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1"  class="form-label">Email address</label>
    <input type="email" ref={email} class="form-control" id="exampleInputPassword1"/>
  </div>
  
  
  </div>
  <div className='nami'>
  <div class="mb-3">
    <label for="exampleInputPassword1"  class="form-label">Password</label>
    <input type="password" ref={password} class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1"  class="form-label">Password confirmation</label>
    <input type="password" ref={passwordCon} class="form-control" id="exampleInputPassword1"/>
  </div>

  
  </div>
  
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  <div className='signin'>IF YOU HAVE ALREADY ACCOUNT ?  <Link id='ty' to='Login'>LOGIN</Link> </div>
</form>



            
              {Errors ? <>
                <div className='Errors'>
               {Object.keys(Errors).map(key=>(
                <p key={key}>{Errors[key][0]}</p>
               )
              )
               }
               </div>
              </>
              :""
              }
            
        </div>
        </div>
    </div>
    </div>
  )
}

export default SignUp