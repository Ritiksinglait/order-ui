import React from 'react'
import Header from './Components/Header/Header'
import {BrowserRouter } from "react-router-dom"
import './App.css'

import Order1 from './Components/Order1/Order1'
import OrderDetails from './Components/OrderDetails/OrderDetails'
const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Header/>
      <OrderDetails/>
      {/* <Order1 */}
      
      
    </div>
    
    </BrowserRouter>
  )
}

export default App