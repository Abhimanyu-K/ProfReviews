import React from 'react';
import './Cards.css';
const Cards = ()=>{
   return (
       <div className='card-container'>
       <div className='card first'>
         <div className='card-sidebar'>
             <img className='profile-image' src='https://i.pravatar.cc/125' alt=''></img>
         </div>
         <div className='card-main'>
             <h1 className='profile-name'>Teacher Name</h1>
             <p className='profile-position'>Researcher</p>
             <p className='profile-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Quisque velit tortor, cursus non rutrum ut, tempor eget urna. Phasellus vitae libero vel risus finibus sollicitudin. 
               </p>
             <a href='/' className='profile-link'>for details<i class="fa fa-external-link"  aria-hidden="true"></i></a>  
         </div>
         </div>
         <div className='card second'>
         <div className='card-sidebar'>
             <img className='profile-image' src='https://i.pravatar.cc/125' alt=''></img>
         </div>
         <div className='card-main'>
             <h1 className='profile-name'>Teacher Name</h1>
             <p className='profile-position'>Researcher</p>
             <p className='profile-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Quisque velit tortor, cursus non rutrum ut, tempor eget urna. Phasellus vitae libero vel risus finibus sollicitudin. 
               </p>
             <a href='/' className='profile-link'>for details<i class="fa fa-external-link"  aria-hidden="true"></i></a>  
         </div>
         </div>
         <div className='card third'>
         <div className='card-sidebar'>
             <img className='profile-image' src='https://i.pravatar.cc/125' alt=''></img>
         </div>
         <div className='card-main'>
             <h1 className='profile-name'>Teacher Name</h1>
             <p className='profile-position'>Researcher</p>
             <p className='profile-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Quisque velit tortor, cursus non rutrum ut, tempor eget urna. Phasellus vitae libero vel risus finibus sollicitudin. 
               </p>
             <a href='/' className='profile-link'>for details<i class="fa fa-external-link"  aria-hidden="true"></i></a>  
         </div>
       </div>
       </div>
       
       
   );
};
export default Cards;