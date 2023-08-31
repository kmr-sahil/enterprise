import React from 'react'
import { useSelector } from 'react-redux'
import CartProduct from './CartProduct'

function Cart() {
    const {products} = useSelector((store) => store.cart)
  return (
    <div className='cart'>
        {products.map((item) => 
        <CartProduct
            key={new Date().getTime() + Math.random()}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            id={item.id}/>
        )}
    </div>
  )
}

export default Cart