import {useState} from 'react';
import './App.css';
import Main from './component/Main'
import Login from './component/Login/Login';
import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
function App() {
  const [loginForm,setLoginForm] = useState(false);
  const showLoginHandler = (event)=>{
    setLoginForm(true);
  }
  const hideLoginHandler = (event)=>{
    setLoginForm(false);
  }
  return (
    <React.Fragment>
    {loginForm && <Login hide={hideLoginHandler}></Login>}
    <Main show = {showLoginHandler} ></Main>
    </React.Fragment>
  );
}

export default App;
