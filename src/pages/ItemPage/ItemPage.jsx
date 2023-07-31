import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import Section from '../../components/Section/Section';
import styles from './ItemPage.module.css'

function ItemPage({items, addToCart}) {

  const { id } = useParams();
  const item = items.find((p) => p.id === parseInt(id, 10));
  

  const [inputValue, setInputValue] = useState(1)

  if (!item) {
    return <div>Loading...</div>; 
  }

  const onClickItem = () =>{
    item.amount = inputValue
    addToCart(item)
  }
  
  const onChangeInput = (text)=>{
    setInputValue(+text.target.value)
  }


  return (
    <>
      <Section title={item.title} activePage={{name: `${item.title}`, path: `/shop/${item.id}`}}  path={`Главная/Магазин/${item.title}`}/>
      <section className={styles.page}>
        <div className='container'>
          <div className={styles.item}>
            <img src={`../${item.img}`} alt="" className={styles.image} />
            <div className={styles.content}>
              <p className={styles.price}>{item.price}</p>
              <form action="" className="form">
              <h4 className={styles.text}>Выберите Размер</h4>
              </form>
              <div className="form">
                <h4 className={styles.text}>Выберите цвет</h4>
                
              </div>
              
              <form action="" className={styles.form}>
                <input className={styles.input} onKeyDown={e => e.preventDefault()} onChange={onChangeInput} value={inputValue} type="number" min={1} max={49} />
                <p onClick={onClickItem} className={styles.button}>Добавить в корзину</p>
              </form>
            </div>
          </div>
        </div>
      </section>

    </>


  )
}

export default ItemPage