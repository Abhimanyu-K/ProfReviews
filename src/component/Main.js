import React,{useRef} from 'react';
import Header from './Header/Header';
import './Main.css';
import Cards from './Card/Cards';
import Svg from './svg';
import Cards1 from './Card/Cards1';
import Footer from './Footer/Footer';
const Main = (props)=>{
  let body = useRef();
  return <div className='home' ref={body}>
     <Header show = {props.show} body = {body}/>
     <div className='front-part'>
      
          <div className='text'>
                <div className='sp1'>The great place</div>
                <br></br>
                <div className='sp2'>Research Enthusiast</div>
                <br></br>
                <br></br>
                <span className='sp3'>Here we provide Students best research faculty </span>
                <br></br>
                <span className='sp3'>allover india.</span>
             </div>
          <div className='svg'>
             
              <Svg ></Svg>
          </div>
    
     </div>
     <div className='front-part1'>
     <h2 className='front-part1-headline'>Professor Mania</h2>
     <div className='front-part1-cards'>
       <Cards/>
       </div> 
     </div>
  
     <div className='front-part2'>
     <h2 className='front-part2-headline'>Testimonials</h2>
     <p className='front-part2-para'>Aur latest Reviews</p>
     <div className='front-part2-cards'>
        <Cards1></Cards1>
       </div> 
     </div>
     <Footer/>
     
     </div>
}
export default Main;