import React from 'react'

import ShopCard from '../../components/ShopCard/ShopCard'
import ShopList from '../../components/ShopList/ShopList'
import Section from '../../components/Section/Section'
import Pagination from '../../components/Pagination/Pagination'
import Filters from '../../components/Filters/Filters'

function Shop({items, itemsPerPage, currentItems, paginate, currentPage}) {


  return (
    <>


      <Section 
        title={'Магазин'}
        activePage={{name: 'Магазин', path: '/shop'}} 
        path={'Главная/Магазин'}/>

      <section className="shop">
          <div className="shop__container container">
              {currentItems.length !== 0
              ?
              <>
                <Filters/>
                <div className="shop__content">
                  <p className="shop__info">Показано: {currentItems.length} из {items.length} товаров</p>
                  <div className="shop__cards">
                    <ShopList items={currentItems}/>
                  </div>
                  <p className="shop__info">Показано: {currentItems.length} из {items.length} товаров</p>

                </div>
                <Pagination 
                  itemsLength={items.length}
                itemsPerPage={itemsPerPage} 
                paginate={paginate}
                  currentPage={currentPage}/>
              </>
              : <p style={{textAlign: 'center', fontSize: '50px'}}>Здесь пока пусто</p>
              }
          </div>
      </section>

    </>

  )
}

export default Shop