import React,{useState} from 'react';
import './CreateAccount.css';
import useInput from '../../Hooks/use-input';
import {Link} from 'react-router-dom';
<<<<<<< HEAD:Client/src/component/Login/CreateAccount.js
import GoogleImg from '../ContactUs/Template/images/google-img.jpg';

||||||| 78a714d:prof/src/component/Login/CreateAccount.js
=======
import { useHistory } from 'react-router-dom';
import {GoogleLogin} from 'react-google-login';
>>>>>>> 5ff42e35541aa7b47d080c7a39a5ec48d9329c6b:prof/src/component/Login/CreateAccount.js
const CreateAccount = (props)=>{
<<<<<<< HEAD:Client/src/component/Login/CreateAccount.js
  
||||||| 78a714d:prof/src/component/Login/CreateAccount.js
=======
  const [data,setData] = useState([]);
  let history = useHistory();
>>>>>>> 5ff42e35541aa7b47d080c7a39a5ec48d9329c6b:prof/src/component/Login/CreateAccount.js
  const {value:enteredName,
  
     valueChangeHandler:nameChangeHandler,
     inputBlurHandler:nameBlurHandler
     } = useInput((value)=>value.trim()!=='');

const {value:enteredEmail,
     
      valueChangeHandler:emailChangeHandler,
      inputBlurHandler:emailBlurHandler
    } = useInput((value)=>value.includes('@'));    

      const {value:enteredPassword,
        
          valueChangeHandler:passwordChangeHandler,
          inputBlurHandler:passwordBlurHandler
          } = useInput((value)=>value.trim().length>=8);  
      const {value:enteredPassword1,
         
           valueChangeHandler:passwordChangeHandler1,
           inputBlurHandler:passwordBlurHandler1
           } = useInput((value)=>value.trim().length>=8);  
     
   const formsubmitHandler = (event)=>{
<<<<<<< HEAD:Client/src/component/Login/CreateAccount.js
    
||||||| 78a714d:prof/src/component/Login/CreateAccount.js
=======
    props.google(true);
>>>>>>> 5ff42e35541aa7b47d080c7a39a5ec48d9329c6b:prof/src/component/Login/CreateAccount.js
     event.preventDefault();
    props.onsignup(event,{email:enteredEmail,password:enteredPassword,name:enteredName,confirmPassword:enteredPassword1});
    }
    const handleLogin = ()=>{
      props.google();
  
    }
<<<<<<< HEAD:Client/src/component/Login/CreateAccount.js
    console.log(process.env.GOOGLE_CLIENT_ID);
||||||| 78a714d:prof/src/component/Login/CreateAccount.js
=======
    const handleLogin = (res)=>{
      props.google(res);
  
    }
    const hello = ()=>{
      console.log("hi");
    }
>>>>>>> 5ff42e35541aa7b47d080c7a39a5ec48d9329c6b:prof/src/component/Login/CreateAccount.js
  return  (
    <div className="login1-Container">
    <div className="login1Header">
      <span>ProReview</span>
    </div>
    <div className="login1FormContainer">
        <div className="login1Form">
            <form onSubmit={formsubmitHandler}>
<<<<<<< HEAD:Client/src/component/Login/CreateAccount.js
            <div className="googleContainer" onClick = {handleLogin}>
                <img src={GoogleImg} alt = "Google Icon"/>
                <p>Login With Google</p>
            </div>
||||||| 78a714d:prof/src/component/Login/CreateAccount.js
                <div className="login1facebook"> <a href="/" className='social'>  <i className="fa fa-facebook"></i><span>Continue with Facebook</span></a></div>
                <div className="login1google">   <a href="/" className='social'>  <i className="fa fa-google"></i></a><span>Continue with Google</span></div>
                <div className="login1github"><a href="/" className='social'>  <i className="fa fa-github"></i></a><span>Continue with Github</span></div>
=======
                <GoogleLogin
                    clientId="224215270537-dtgav02548e8bbrlbltujslkf9c504o9.apps.googleusercontent.com"
                    buttonText="Log in with Google"
                    onClick = {hello}
                    onSuccess={handleLogin}
                    onFailure={handleLogin}
                    cookiePolicy={'single_host_origin'}
                    className = "login1google1"
                />
               
>>>>>>> 5ff42e35541aa7b47d080c7a39a5ec48d9329c6b:prof/src/component/Login/CreateAccount.js
                 <div className="login1Text"><span>or enter your email address</span></div>
                 <div className="createFormFill">
                 <span>Full Name</span>
                 <input type="text" name="name" value={enteredName} onBlur={nameBlurHandler} onChange={nameChangeHandler}></input>
                     <span>Email</span>
                 <input type="email"  name="email" value={enteredEmail} onBlur={emailBlurHandler} onChange={emailChangeHandler}></input>
                
                 <span>Password</span>
                 <input type="password"  name="password" value={enteredPassword} onBlur={passwordBlurHandler} onChange={passwordChangeHandler}></input>
                
                 <span>Confirm Password</span>
                 <input type="password"  name="confirmPassword" value={enteredPassword1} onBlur={passwordBlurHandler1} onChange={passwordChangeHandler1}></input>
             
                 <button type="submit">Continue</button>
                <p className="span3"> Already have an account?</p><a href="/"><Link to="/login">Login</Link></a>
                 </div>
                 
            </form>
        </div>
    </div>
</div>
  );
};
export default CreateAccount;

