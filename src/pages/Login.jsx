import React, { useState } from 'react'
import FormComponent from '../Components/FormComponent'

function Login({showAvatar}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className='justify-center items-center'>
      <div>
        <FormComponent showAvatar={isLoggedIn}/>
      </div>
    </div>
  )
}

export default Login
