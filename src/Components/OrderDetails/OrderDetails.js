import React from 'react'
import './OrderDetails.css'
import back from '../../images/back.png'
import details from '../../images/details.png'
import note from '../../images/note.png'
import Order1 from '../OrderVariety/Order1.js'
import Order2 from '../OrderVariety/Order2.js'
import Order3 from '../OrderVariety/Order3.js'
const OrderDetails = () => {
  return (
    <div>
      <div className='detailsHeader'>

        <div className='backbutton'>
          <img src={back} alt="back" />         
        </div>

        <div>
          
          <span className='details'>Order Details</span>
        </div>

      </div>

      <div className='note'>
        
        <div className='notediv'>
          <span className='notehead'>Note:<span className='notetext'>Your order for the past 24 hours</span></span>
        </div>
      </div>
      <Order1 />
      <Order2 />
      <Order3 />
      
    </div>
  )
}

export default OrderDetails