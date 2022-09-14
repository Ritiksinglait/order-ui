import React from 'react'
import coffee from '../../images/orders/coffee.png'

import note from '../../images/orders/statusBeing.png'
import OrderPage from '../Order1/Order1'
const Order1 = () => {
  const handleClick = (e)=> {
    e.preventDefault();
    <OrderPage/>

    window.alert('redirecting is not working right now , u can manually switched to another page from code provided to you')
  };
  return (
    <div>
        <div className='outer' onClick={handleClick}>
            <div className='logobox' >
              <img  src={coffee} alt='coffee' className='coffee'/>
              
              
            </div>
            <div className='orderno'>
                
                <span className='detail'>Order 1</span>
                <span className='total'>Total: <span className='price'>&#8377;500</span></span>
              </div>

            <div className='idbox'>
              
              <span className='id'>ID:<span className='colorred'>1234567890</span></span>
              <img  src={note} alt='note'/>
            </div>

            
        </div>
        

    </div> 
  )
}

export default Order1