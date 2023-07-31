import React from 'react'
import ShopCard from '../ShopCard/ShopCard'

function ShopList({items}) {

  return (
    <>
      {items.map(item => 
        <ShopCard
          key={item.id} 
          id={item.id}
          title={item.title} 
          price={item.price} 
          img={item.img}/>
      )}
    </>
  )
}

export default ShopList