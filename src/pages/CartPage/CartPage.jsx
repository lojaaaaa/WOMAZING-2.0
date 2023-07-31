import React from 'react'
import Section from '../../components/Section/Section'
import styles from './CartPage.module.css'
import CartItem from '../../components/CartItem/CartItem'
import Button from '../../components/UI/Button/Button'

function CartPage({items, removeFromCart, removeAllFromCart}) {

  const total = items.reduce(
    (acc, item) => 
    acc += (+(item.price.slice(1, item.price.length)) * +item.amount), 0)

  const onAllDelete = ()=>{
    removeAllFromCart()
  }

  return (
    <>
      <Section title="Корзина" activePage={{name: 'Корзина', path: '/'}} path={''}/>
      <section className="cart">
        <div className={"container"}>
          <div className={styles.content}>
            <div className={styles.table}>
              <div className={styles.head}>
                <h4 className={styles.name}>Товар</h4>
                <div className={styles.names}>
                  <h4 className={styles.name}>Цена</h4>
                  <h4 className={styles.name}>Количество</h4>
                  <h4 className={styles.name}>Всего</h4>
                </div>
              </div>
              <div className={styles.tail}>
                {items.length !== 0
                ?
                  <div className={styles.items}>
                    {items.map(item => 
                      <CartItem 
                        key={item.ID}
                        ID={item.ID}
                        id={item.id}
                        title={item.title} 
                        price={item.price} 
                        img={item.img}
                        amount={item.amount}
                        removeFromCart={removeFromCart}
                        />
                    )}
                    
                  </div>
                : <p style={{alignSelf: 'center', fontSize: '30px', marginTop: '45px'}}>Здесь пока пусто</p>
                }


              </div>
            </div>

            <div className={styles.control}>
              <div className={styles.coupon}>
                <input type="text" name="" id="" placeholder='Введите купон' />
                <Button text='Применить купон' color='white'/>
              </div>
              <Button onAllDelete={onAllDelete} text='Очистить корзину' color='white' />
            </div>

            <div className={styles.total}>
              <div className={styles.subtotal}>Подытог: <span>${total}</span></div>
              <div className={styles.finally}>
                <div className={styles.finallyPrice}>Итого: <span>${total}</span></div>
                <Button text='Оформить заказ' color='green'/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CartPage