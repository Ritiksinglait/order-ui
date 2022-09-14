import React from 'react'
import './Order.css'
import coffee from '../../images/orders/coffee.png'
import order from '../../images/orders/order3.png'
import id from '../../images/orders/id.png'
import note from '../../images/orders/statusPending.png'
const Order1 = () => {
  return (
    <div>
        <div className='outer' >
            <div className='logobox' >
              <img  src={coffee} alt='coffee' className='coffee'/>
              
              
            </div>
            <div className='orderno'>
                
                <span className='detail'>Order 3</span>
                <span className='total'>Total: <span className='price'>&#8377;220</span></span>
              </div>

            <div className='idbox'>
              
              <span className='id'>ID:<span className='colorred'>1234567890</span></span>
              <img  src={note} alt='note' />
            </div>

            
        </div>
        

    </div> 
  )
}

export default Order1