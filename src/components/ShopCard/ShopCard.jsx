import React from 'react'
import { Link } from 'react-router-dom';

function ShopCard({img, title, price, id}) {
  return (
    <div className="shop__card card">
      <Link to={`/shop/${id}`} className="shop__card-image card-image">
          <img src={img} alt="card-img"/>
      </Link>
      <Link to={`/shop/${id}`} className="shop__card-title card-title">{title}</Link>
      {/* <a href="#" className="shop__card-title card-title">{title}</a> */}
      <p className="shop__card-text card-text">{price}</p>
    </div>
  )
}

export default ShopCard