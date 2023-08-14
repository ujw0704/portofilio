import React from 'react'
 import "./Home.css"
 import {Link}  from 'react-router-dom'
function Home() {
  return (
    <div className='main-box'>
   
  
    <div className='container'>
      <div className='pic'>
        <img src='https://ananthukrish.netlify.app/assets/ananthu.f2a027e0.png' alt=''/>
      </div>
      <div className='Detail'>
         <h1>Ananthu Krishnan</h1>
         <p className='web'>Web Developer</p>
         <div className='buttons'><button type="">RESUME</button>
        <button><Link to="/contact">HIRE ME</Link></button></div>

      </div>
      </div>
    </div>
  
  )
}

export default Home
