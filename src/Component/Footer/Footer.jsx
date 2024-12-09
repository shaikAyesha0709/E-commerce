import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div>
          <div className="line"></div>
      <div class="footer">
        
        <div className="left">
            <ul className='uno'>
            <p>Get To Know Us</p>
            <li>Contact Us</li>
            <li>Blog</li>
            <li>Reviews</li>
            </ul>
        </div>
        <div className="middle">
            <ul className='uno'>
                  <p>Customer Care</p>
                  <li>Timings: 10 AM - 7 PM (Mon - Sat)</li>
                  <li>Whatsapp : +91 9123474694</li>
                  <li>Instagram : Sneaker@99</li>
            </ul>
        </div>
        <div className="right">
            <ul className='uno'>
                  <p>Get In Touch</p>
                  <li>Instagram</li>
                  <li>Youtube</li>
                  <li>Facebook</li>
            </ul>
        </div>

      </div>
  </div>
  )
}

export default Footer