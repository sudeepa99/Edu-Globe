import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/EDU.png"

const Navigation = () => {
  return (
    <div >
        <div className='flex flex-row text-black gap-72 mt-8 justify-center'>
            <div>
                <img src={logo}/>
            </div>
            <div>
                <ul className='text-black flex flex-row gap-5 font-bold text-lg pt-6'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/courses">Courses</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div>
                <button className='text-white border-solid bg-blue-500 rounded-lg p-2 mt-4 text-lg'>Enroll Now</button>
            </div>
            
        </div>
        
        <div>

        </div>
        
      
    </div>
  )
}

export default Navigation
