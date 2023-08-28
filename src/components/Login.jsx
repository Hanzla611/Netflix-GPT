import { useState, useRef } from "react";
import Header from "./Header";
import {checkValidData} from '../utils/validate'

function Login() {
  const[isSignInForm, setIsSignInForm]=useState(true);
  const[errorMessage, setErrorMessage] = useState()
  const email = useRef(null);
  const password = useRef(null)
  const toggleSigninForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage('');
  }
  const handleButtonClick = () => {
   const message =  checkValidData(email.current.value, password.current.value);
   setErrorMessage(message);
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
    
      <form onSubmit={(e)=>e.preventDefault()} className="p-12 pb-36 w-3/12 my-36 mx-auto left-0 right-0 absolute bg-black text-white rounded-lg bg-opacity-100" style={{opacity:"0.9"}}>
        <h1 className="text-3xl font-bold py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm &&  <input type="text" placeholder="Full Name" className="p-4 my-4 rounded-lg w-full bg-gray-800"/>}
        <input ref={email} type="text" placeholder="Email" className="p-4 my-4 rounded-lg w-full bg-gray-800"/>
        <input ref={password} type="password" placeholder="Password" className="p-4 my-4 rounded-lg w-full bg-gray-800"/>
        <p className="text-red-600 mb-4 font-bold text-xl">{errorMessage}</p>
        <button className="p-4 my-6 rounded-lg bg-red-500  w-full" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="py-2 text-xs cursor-pointer hover:underline" onClick={toggleSigninForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already a User? Sign In."}</p>
      </form>
    </div>
  );
}

export default Login;
