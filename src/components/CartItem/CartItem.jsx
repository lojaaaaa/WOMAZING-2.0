import React from 'react'
import styles from './CartItem.module.css'
import { Link } from 'react-router-dom'

function CartItem({title, id, price, img, amount, removeFromCart, ID}) {

  const onClickDelete = () =>{
    removeFromCart(id, ID)
  }
  const totalItem = +amount * (+price.slice(1, price.length))

  return (
    <div className={styles.item}>
        <div className={styles.left}>
          <h4 onClick={onClickDelete} className={styles.delete}>&#10006;</h4>
          <Link to={`/shop/${id}`}>
            <img src={img} className={styles.image} alt='fd'></img>
          </Link>
          
    
        </div>
        <div className={styles.right}>
          <Link to={`/shop/${id}`}>
            <h4 className={styles.name}>{title}</h4>
          </Link>
          <h4 className={styles.name}>{price}</h4>
          <h4 className={styles.name}>{amount}</h4>
          <h4 className={styles.name}>${totalItem}</h4>
        </div>
    </div>


  )
}

export default CartItem