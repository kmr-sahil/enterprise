import React from 'react'
import '../App.css'
import { useSelector } from 'react-redux'


function Navbar() {

    const amount = useSelector((store) => store.cart.amount)
    const total = useSelector((store) => store.cart.total)

  return (
    <div className='nav'>
        <h2>Akart</h2>
        <div>Cart
            <span>{amount}</span>
        </div>
        <h3>$ {total}</h3>
    </div>
  )
}

export default Navbar