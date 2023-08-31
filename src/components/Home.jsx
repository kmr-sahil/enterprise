import React, { useEffect } from 'react'
import '../App.css'
import { useSelector } from 'react-redux'
import Products from './Products'
import products from '../../public/Data'

function Home() {


  return (
    <div className='home'>
        {products.map((item, i) => 
            <Products 
            key={new Date().getTime() + Math.random()}
            image={item.image}
            name={item.name}
            price={item.price}
            amount={item.amount}
            id={item.id}
            />
                
            )}
    </div>
  )
}

export default Home