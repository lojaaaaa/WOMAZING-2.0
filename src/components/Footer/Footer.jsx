import React from 'react'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
          <div className="footer__head">
            <a href="#home" className="footer__logo">
              <img src="./img/main/logo.svg" alt="logo"/> 
            </a>
            <nav className="nav">
              <ul className="nav__menu">
                <li className="nav__menu-item">
                  <a href="#" className="nav__menu-link">Главная</a>
                </li>
                <li className="nav__menu-item">
                  <a href="#" className="nav__menu-link">Магазин</a>
                </li>
                <li className="nav__menu-item">
                  <a href="#" className="nav__menu-link">О бренде</a>
                </li>
                <li className="nav__menu-item">
                  <a href="#" className="nav__menu-link">Контакты</a>
                </li>
              </ul>

            </nav>
            <div className="footer__other">
              <a href="tel:74958235412" className="footer__phone-link">+7 (495) 823-54-12</a>
              <a href="mailto:hello@womazing.com" className="footer__enail-link">hello@womazing.com</a>
            </div>
          </div>
          <div className="footer__bottom">
              <div className="footer__bottom-text">
                  <ul className="footer__list">
                    <li className="footer__list-item"><a href="#" className="footer__list-link">© Все права защищены</a></li>
                    <li className="footer__list-item"><a href="#" className="footer__list-link">Политика конфиденциальности</a></li>
                    <li className="footer__list-item"><a href="#" className="footer__list-link">Публичная оферта</a></li>
                  </ul>
                  <ul className="footer__list">
                    <li className="footer__list-item"><a href="#" className="footer__list-link">Пальто</a></li>
                    <li className="footer__list-item"><a href="#" className="footer__list-link">Свитшоты</a></li>
                    <li className="footer__list-item"><a href="#" className="footer__list-link">Кардиганы</a></li>
                    <li className="footer__list-item"><a href="#" className="footer__list-link">Толстовки</a></li>
                  </ul>
              </div>
              <div className="footer__social">
                  <div className="footer__icons">
                    <a href="#" className="footer__icon"><img src="./img/footer/instagram.svg" alt="instagram" className="footer__icon-img"/></a>
                    <a href="#" className="footer__icon"><img src="./img/footer/facebook.svg" alt="facebook" className="footer__icon-img"/></a>
                    <a href="#" className="footer__icon"><img src="./img/footer/twitter.svg" alt="twitter" className="footer__icon-img"/></a>
                  </div>
                  <img className="footer__social-image" src="./img/footer/visa-mastercard.png" alt="card"/>
              </div>
          </div>
      </div>
      </footer>
  )
}

export default Footer