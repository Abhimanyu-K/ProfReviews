import React,{useState,useRef} from 'react';
import './Header.css';
const Header = (props)=>{
    const [navbar,setNavbar] = useState(false);
    const [loginInfo,setLoginInfo] = useState(false);
    const loginInfoHandler = ()=>{
        setLoginInfo(true);
    }
    const themeChange = useRef();
    const menutoggle = useRef();
    const navigation =  useRef();

    //console.log(themeChange.current.classList);
    const changeBackgroundColor = ()=>{
        if(window.scrollY>=80 ){
            if(!loginInfo)
            {
                setNavbar(true)
            }
            else{
                setNavbar(false)
            }
            
        }
        else{
            setNavbar(false)
        }
    }
 
    const themeChangeHandler = ()=>{
        themeChange.current.classList.toggle('active');
        props.body.current.classList.toggle('dark');
    }
    const menuToggleHandler = ()=>{
        menutoggle.current.classList.toggle('active');
        navigation.current.classList.toggle('active');

    }
    window.addEventListener('scroll',changeBackgroundColor)
    let navbarclassname = 'nav';
    navbarclassname = navbar ? 'nav-scroll' :'nav';
  return (
      <div className={props.body}>
      <nav className={navbarclassname}>
          <div className='logo'>
              <span className='logo1'>Prof</span>
              <span className='logo2'>Review</span>
          </div>
          <div className="toggle" ref={menutoggle} onClick={menuToggleHandler}></div>
          <ul className='ulist' ref={navigation}>
              <li><a href="/">Faculty Room</a></li>
              <li><a href="/">About us</a></li>
              <li onClick={props.show} className='log' onChange={loginInfoHandler}>Login</li>
              <li><span className='themeChange' ref={themeChange} onClick={themeChangeHandler}></span></li>
          </ul>
      </nav>
      </div>
  );

}

export default Header;