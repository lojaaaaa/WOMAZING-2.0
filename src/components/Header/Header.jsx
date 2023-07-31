import React from 'react'
import { NavLink } from 'react-router-dom';

function Header({cartItems}) {

  const onClickBurger = () =>{
    console.log('fd')
    document.querySelector('.header__nav').classList.toggle('header__nav--active')
    document.querySelector('.header__burger').classList.toggle('header__burger--active')
  }

  return (
    <header className="header header--active">
      <div className="header__container container">
          <NavLink to={'/'} className="nav__menu-link">
            <img src="./img/main/logo.svg" alt="logo"></img>
          </NavLink>
          <div className="header__menu">
            <nav className="header__nav nav">
              <ul className="nav__menu">
                  <li className="nav__menu-item">
                    <NavLink onClick={onClickBurger} to={'/'} className="nav__menu-link">Главная</NavLink>
                  </li>
                  <li className="nav__menu-item">
                    <NavLink onClick={onClickBurger} to={'/shop'} className="nav__menu-link">Магазин</NavLink>
                  </li>
                  <li className="nav__menu-item">
                    <NavLink onClick={onClickBurger} to={'/about'} className="nav__menu-link">О бренде</NavLink>
                  </li>
                  <li className="nav__menu-item">
                    <NavLink onClick={onClickBurger} to={'/contacts'} className="nav__menu-link">Контакты</NavLink>
                  </li>
              </ul>
            </nav>
            <div className="header__other">
                <div className="header__phone">
                    <a href="#" className="header__phone-img popup-open" id="popup-open"><img src="./img/main/call.svg" alt="dsd"></img></a>
                    <a href="tel:74958235412" className="header__phone-link">+7(495)823-54-12</a>
                </div>
                <NavLink to={'/cart'} className="header__bag">
                  <img className="header__bag-img" src="./img/main/bags.svg" alt="bag"></img>
                  {cartItems.length !== 0
                  ? <p className="header__bag-text">{cartItems.reduce((acc, item) => (acc) += +(item.amount), 0)}</p>
                  : null
                  }  
                </NavLink>
            </div>
            <div onClick={onClickBurger} className="header__burger" ><span></span></div>
          </div>
      </div>
    </header>
  )
}

export default Header