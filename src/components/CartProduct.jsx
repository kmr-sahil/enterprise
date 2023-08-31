import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteItem } from '../store/cartSlice'

function CartProduct({name, price, quantity, id}) {

    const dispatch = useDispatch()

  return (
    <div className='cartp'>
            <h4>{name}</h4>
            <h5>$ {price}</h5>
            <button onClick={() => {dispatch(deleteItem ({id}))}}>-</button>
            <h6>{quantity} quantity</h6>
            <button>+</button>
    </div>
  )
}

export default CartProduct