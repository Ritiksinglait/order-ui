import React from 'react'
import './Order1.css'
import back from '../../images/back.png'
import details from '../../images/orders/order1page.png'
import itemDetails from '../../images/orders/itemdetails.png'
import menu from '../../images/orders/menu.png'
import home from '../../images/orders/gohome.png'
import List from './List'
const Order1 = () => {
  return (
    <div>
      <div className='detailsHeader'>

        <div className='backbutton'>
          <img src={back} alt="back" />         
        </div>

        <div>
          <img src={details} alt="back" className='details'/>
        </div>

      </div>

      
      <img src={itemDetails} alt="back" className='detailsimage'/> 
      <hr/>
      {/* <img src={menu} alt="back" className='noteImage'/> */}
      <List/>
      <List/>
      <List/>
      <List/>
      <br/> 
      <img src={home} alt='home' className='home'/>
      
    </div>
  )
}

export default Order1