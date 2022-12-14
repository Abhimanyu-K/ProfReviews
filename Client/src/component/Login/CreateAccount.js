import React,{useState} from 'react';
import './CreateAccount.css';
import useInput from '../../Hooks/use-input';
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {GoogleLogin} from 'react-google-login';
const CreateAccount = (props)=>{
  const [data,setData] = useState([]);
  let history = useHistory();
  const {value:enteredName,
    isValid:enterednameIsValid,
     hasError:inputHasError,
     valueChangeHandler:nameChangeHandler,
     inputBlurHandler:nameBlurHandler,
      reset:resetNameInput} = useInput((value)=>value.trim()!=='');

const {value:enteredEmail,
     isValid:enteredEmailIsValid,
      hasError:emailHasError,
      valueChangeHandler:emailChangeHandler,
      inputBlurHandler:emailBlurHandler,
      reset:resetEmailInput} = useInput((value)=>value.includes('@'));    

      const {value:enteredPassword,
         isValid:enteredPasswordIsValid,
          hasError:passwordHasError,
          valueChangeHandler:passwordChangeHandler,
          inputBlurHandler:passwordBlurHandler,
           reset:resetPasswordInput} = useInput((value)=>value.trim().length>=8);  
      const {value:enteredPassword1,
          isValid:enteredPasswordIsValid1,
            hasError:passwordHasError1,
           valueChangeHandler:passwordChangeHandler1,
           inputBlurHandler:passwordBlurHandler1,
             reset:resetPasswordInput1} = useInput((value)=>value.trim().length>=8);  
     
   const formsubmitHandler = (event)=>{
     event.preventDefault();
     console.log(enteredEmail);
             props.onsignup(event,{email:enteredEmail,password:enteredPassword,name:enteredName,confirmPassword:enteredPassword1});
    }
    const handleLogin = (res)=>{
      props.google(true);
      const result = res.profileObj;
      const token = res.tokenId;
      console.log(result, token);
      
      fetch("http://localhost:8080/auth/api/v1/auth/google",{
        method:"PUT",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          token:token
        })
      })
      .then(res=>{
        return res.json();
      })
      .then(resData=>{
        console.log(resData);
        localStorage.setItem("token", resData.token);
        localStorage.setItem("userId", resData.userId);
        localStorage.setItem("userName", resData.userName);
        localStorage.setItem("image",resData.picture);
        localStorage.setItem("date",resData.date);
        localStorage.setItem("google",resData.exist);
        const remainingMilliseconds = 60 * 60 * 1000;
        const expiryDate = new Date(
          new Date().getTime() + remainingMilliseconds
        );
        localStorage.setItem("expiryDate", expiryDate.toISOString());
        history.push("/");
      })


    }
    const hello = ()=>{
      console.log("hi");
    }
  return  (
    <div className="login1-Container">
    <div className="login1Header">
      <span>ProReview</span>
    </div>
    <div className="login1FormContainer">
        <div className="login1Form">
            <form onSubmit={formsubmitHandler}>
                <GoogleLogin
                    clientId="224215270537-dtgav02548e8bbrlbltujslkf9c504o9.apps.googleusercontent.com"
                    buttonText="Log in with Google"
                    onClick = {hello}
                    onSuccess={handleLogin}
                    onFailure={handleLogin}
                    cookiePolicy={'single_host_origin'}
                    className = "login1google1"
                />
               
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

