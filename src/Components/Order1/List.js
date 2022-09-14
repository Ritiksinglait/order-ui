import React from 'react'
import chicken from '../../images/orders/chicken.png'

import note from '../../images/orders/statusBeing.png'
import './Order1.css'
const List = () => {
  return (
    <div>
        <div className='outer' >
            
              <img  src={chicken} alt='chicken' className='coffee'/>

            
            <div className='orderno'>
                
                <span className='detail'>Chicken Briyani</span>
                 <span className='price'>&#8377;170</span>
              </div>

            <div className='idbox'>
              
              
              <img  src={note} alt='note'  className='status'/>
              <span className='id'>Qty:<span className='colorred'>1 Nos</span></span>
            </div>

            
        </div>
    </div>
  )
}

export default List