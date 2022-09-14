import React from 'react'
import './Header.css'

// import backbutton from '../../../assets/icons/Back Button.png'
const Header = () => {
  return (
    <div className='parent'>
        <div className='header'>
            <div className='time'>9:41</div>
            
            <div className='headerIcons'> 
                <i class="fa-solid fa-signal icon1"></i>
                <i class="fa-solid fa-wifi icon2"></i>
                <i class="fa-solid fa-battery-full icon3"></i>
            </div>
        </div>

        
    </div>
  )
}

export default Header