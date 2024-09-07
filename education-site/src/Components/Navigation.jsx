import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
        <div>
            <h2></h2>

            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/courses">Courses</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>

            </div>
            <button>Enroll Now</button>
        </div>
        
        <div>

        </div>
        
      
    </div>
  )
}

export default Navigation
