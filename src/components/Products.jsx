import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/cartSlice'

function Products({image, name, price, amount, id }) {

    const dispatch = useDispatch()

  return (
    <div className='product'>
        <img style={{width: "200px"}} src={image} alt="" />
        <div>
            <h2>{name}</h2>
            <h2>$ {price}</h2>
        </div>
        <div>
            <button onClick={() => {dispatch(addToCart ({id, name, price})) }}>Add to cart</button>
        </div>

    </div>
  )
}

export default Products