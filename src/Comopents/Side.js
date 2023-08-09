import React from 'react'
 import { Link } from"react-router-dom"
 import './slide.css'
function Side() {
  return (
    <div className='link'>

        <ul>

        <li>   
              <Link to ="/"><i class="fa-solid fa-house"></i></Link>
        </li>

        <li>

        <Link to ="/about"><i class="fa-solid fa-user"></i></Link>
        </li>
        <li>

        <Link to ="/skill"><i class="fa-regular fa-file-code"></i></Link>
        </li>

        <li>

         <Link to = "/work"><i class="fa-solid fa-briefcase"></i></Link> 
        </li>

        <li>

        <Link to ="/qulifation"><i class="fa-solid fa-graduation-cap"></i></Link>
        </li>
        <li>

        <Link to ="/portifoli"><i class="fa-regular fa-clone"></i></Link>
        </li>
        <li>

        <Link to ="/contact"><i class="fa-solid fa-address-book"></i></Link>
        </li>

        </ul>
        
     


        
        

        
      
    </div>
  )
}

export default Side
