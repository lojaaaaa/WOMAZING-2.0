import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { getApi } from "./API/api";

import axios from 'axios'

import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import ItemPage from "./pages/ItemPage/ItemPage";
import CartPage from "./pages/CartPage/CartPage";

import Header from "./components/Header/Header";

import './styles/shop.css'
import Footer from "./components/Footer/Footer";

function App() {

  const [items, setItems] = useState([]) // Карточки на странице Магазин
  const [cartItems, setCartItems] = useState([]) // Карточки на странице Корзина

  const [currentPage, setCurrentPage] = useState(1) // Текущая страница
  const [itemsPerPage, setItemsPerPage] = useState(3) // Количество товаров на одной странице

  // Получение данных с сервера
  const getData = async () =>{
    try{
      const itemsData = await getApi("https://64c3b72867cfdca3b6602978.mockapi.io/items")
      const cartItemsData = await getApi("https://64c3b72867cfdca3b6602978.mockapi.io/cart")
      setItems(itemsData)
      setCartItems(cartItemsData)
    }
    catch(error){
      console.error(error)
    }
  }
  useEffect(()=>{
    getData()
  }, [])

  const addToCart = async (item) =>{
    try{
      if(!cartItems.find(cartItem => cartItem.id === item.id)){
        const response = await axios.post('https://64c3b72867cfdca3b6602978.mockapi.io/cart', item)
        setCartItems(cartItems => [...cartItems, response.data])
      }
      else{
        const amount = cartItems.find(cartItem => cartItem.id === item.id).amount
        console.log(amount + item.amount)
        item.amount += amount

        try{
          const item_2 = cartItems.find(cartItem => cartItem.id === item.id)
          await axios.delete(`https://64c3b72867cfdca3b6602978.mockapi.io/cart/${item_2.ID}`)
          setCartItems(cartItems => cartItems.filter(cartItem => cartItem.id !== item.id))

          const response = await axios.post('https://64c3b72867cfdca3b6602978.mockapi.io/cart', item)
          setCartItems(cartItems => [...cartItems, response.data])
        }
        catch(error){
          console.error(error)
        }

      }

    }
    catch(error){
      console.error(error)
    }
  
  }

  const removeFromCart = async (id, ID) =>{
    try{
      await axios.delete(`https://64c3b72867cfdca3b6602978.mockapi.io/cart/${+ID}`)
      setCartItems(cartItems => cartItems.filter(cartItem => cartItem.id !== id))
    }
    catch(error){
      console.error(error)
    }
  }

  const removeAllFromCart = async()=>{
    try{
      await cartItems.forEach(cartItem => axios.delete(`https://64c3b72867cfdca3b6602978.mockapi.io/cart/${cartItem.ID}`))
      setCartItems([])
    }
    catch(error){
      console.error(error)
    }
  }

  // Пагинация
  const lastItemIndex = currentPage * itemsPerPage
  const firstItemIndex = lastItemIndex - itemsPerPage
  const currentItems = items.slice(firstItemIndex, lastItemIndex)

  const paginate = (pageNumber) =>{
    setCurrentPage(pageNumber)
  }



  return (
    <>
      <div className="wrapper">
        <Header cartItems={cartItems}/>

        <main className="main">
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/shop' element={<Shop
            items={items} 
            itemsPerPage={itemsPerPage} 
            currentItems={currentItems}
            paginate={paginate}
            currentPage={currentPage}/>}/>
            <Route path='/shop/:id' element={<ItemPage items={items} addToCart={addToCart}/>}/>
            <Route path='/cart'element={<CartPage 
              items={cartItems} 
              removeFromCart={removeFromCart} 
              removeAllFromCart={removeAllFromCart}/>}/>
          </Routes>
        </main>
        
        <Footer/>
      </div>
    </>
  );
}

export default App;
