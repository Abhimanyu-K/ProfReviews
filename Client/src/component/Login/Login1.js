import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import './Login1.css';
<<<<<<< HEAD:Client/src/component/Login/Login1.js
import GoogleImg from '../ContactUs/Template/images/google-img.jpg';
||||||| 78a714d:prof/src/component/Login/Login1.js
=======
import { useHistory } from 'react-router-dom';
>>>>>>> 5ff42e35541aa7b47d080c7a39a5ec48d9329c6b:prof/src/component/Login/Login1.js
import useInput from '../../Hooks/use-input';
<<<<<<< HEAD:Client/src/component/Login/Login1.js

//import {GoogleLogin} from 'react-google-login';
//const clientId = "224215270537-dtgav02548e8bbrlbltujslkf9c504o9.apps.googleusercontent.com";
const Login1 = (props)=>{
    
||||||| 78a714d:prof/src/component/Login/Login1.js
const Login1 = (props)=>{

=======
import {GoogleLogin} from 'react-google-login';
const Login1 = (props)=>{
    const history = useHistory();
>>>>>>> 5ff42e35541aa7b47d080c7a39a5ec48d9329c6b:prof/src/component/Login/Login1.js
    const {value:enteredEmail,
       
         hasError:emailHasError,
         valueChangeHandler:emailChangeHandler,
         inputBlurHandler:emailBlurHandler
       } = useInput((value)=>value.includes('@'));  

    const {value:enteredPassword,
         
            hasError:passwordHasError,
            valueChangeHandler:passwordChangeHandler,
            inputBlurHandler:passwordBlurHandler
        } = useInput((value)=>value.trim().length>=6);
    const formChangeHandler = (event)=>{
           event.preventDefault();
           props.onLogin(event,{email:enteredEmail,password:enteredPassword})   
           
           //resetEmailInput();
           //resetPasswordInput();
        }
<<<<<<< HEAD:Client/src/component/Login/Login1.js
        const handleLogin = ()=>{
            
            props.google();
        }    
||||||| 78a714d:prof/src/component/Login/Login1.js
=======
        const handleLogin = (res)=>{
      
            props.google(res);
      
      
          }    
>>>>>>> 5ff42e35541aa7b47d080c7a39a5ec48d9329c6b:prof/src/component/Login/Login1.js
        const inputEmailClass = emailHasError ?'form-control invalid': 'form-control';
        
   return (
       <div className="login1-Container">
           <div className="login1Header">
             <span>ProfReview</span>
           </div>
           <div className="login1FormContainer">
               <div className="login1Form">
                   <form onSubmit={formChangeHandler}>
<<<<<<< HEAD:Client/src/component/Login/Login1.js
                        <div className="googleContainer" onClick = {handleLogin}>
                            <img src={GoogleImg} alt = "Google Icon"/>
                            <p>Login With Google</p>
                        </div>    
||||||| 78a714d:prof/src/component/Login/Login1.js
                       <div className="login1facebook"> <a href="/" className='social'>  <i className="fa fa-facebook"></i><span>Continue with Facebook</span></a></div>
                       <div className="login1google">   <a href="/" className='social'>  <i className="fa fa-google"></i></a><span>Continue with Google</span></div>
                       <div className="login1github"><a href="/" className='social'>  <i className="fa fa-github"></i></a><span>Continue with Github</span></div>
=======
                        <GoogleLogin
                            clientId="224215270537-dtgav02548e8bbrlbltujslkf9c504o9.apps.googleusercontent.com"
                            buttonText="Log in with Google"
                            
                            onSuccess={handleLogin}
                            onFailure={handleLogin}
                            cookiePolicy={'single_host_origin'}
                            className = "login1google1"
                        />
>>>>>>> 5ff42e35541aa7b47d080c7a39a5ec48d9329c6b:prof/src/component/Login/Login1.js
                        <div className="login1Text"><span>Have a Password? Continue with your email address</span></div>
                        <div className="login1FormFill">
                            <span>Email</span>
                            <input type="text"  value={enteredEmail} onBlur={emailBlurHandler} name="email"  onChange={emailChangeHandler} className={inputEmailClass}></input>
                            {emailHasError && <p className='error-text'>Please enter a valid e-mail</p>}
                            <span>Password</span>
                            <input type="password" name="password" value={enteredPassword} onBlur={passwordBlurHandler} onChange={passwordChangeHandler} ></input>
                            {passwordHasError && <p className='error-text'>Password must be of length greater than 8</p>}

                            <button type="submit">Continue</button>
                            <span className="span1"><a href="/"><Link to="/reset-password">Forget password?</Link></a></span>
                        </div>
                        
                   </form>
               </div>
           </div>
       </div>
   );
};
export default Login1;

/*
<GoogleLogin
    clientId={clientId}
     buttonText="Log in with Google"           
    onSuccess={handleLogin}
    onFailure={handleLogin}
    cookiePolicy={'single_host_origin'}
    className = "login1google1"
    />
*/