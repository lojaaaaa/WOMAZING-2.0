import React from 'react'

function Footer() {
  return (
    <footer class="footer">
      <div class="footer__container container">
          <div class="footer__head">
            <a href="#home" class="footer__logo">
              <img src="./img/main/logo.svg" alt="logo"/> 
            </a>
            <nav class="nav">
              <ul class="nav__menu">
                <li class="nav__menu-item">
                  <a href="#" class="nav__menu-link">Главная</a>
                </li>
                <li class="nav__menu-item">
                  <a href="#" class="nav__menu-link">Магазин</a>
                </li>
                <li class="nav__menu-item">
                  <a href="#" class="nav__menu-link">О бренде</a>
                </li>
                <li class="nav__menu-item">
                  <a href="#" class="nav__menu-link">Контакты</a>
                </li>
              </ul>

            </nav>
            <div class="footer__other">
              <a href="tel:74958235412" class="footer__phone-link">+7 (495) 823-54-12</a>
              <a href="mailto:hello@womazing.com" class="footer__enail-link">hello@womazing.com</a>
            </div>
          </div>
          <div class="footer__bottom">
              <div class="footer__bottom-text">
                  <ul class="footer__list">
                    <li class="footer__list-item"><a href="#" class="footer__list-link">© Все права защищены</a></li>
                    <li class="footer__list-item"><a href="#" class="footer__list-link">Политика конфиденциальности</a></li>
                    <li class="footer__list-item"><a href="#" class="footer__list-link">Публичная оферта</a></li>
                  </ul>
                  <ul class="footer__list">
                    <li class="footer__list-item"><a href="#" class="footer__list-link">Пальто</a></li>
                    <li class="footer__list-item"><a href="#" class="footer__list-link">Свитшоты</a></li>
                    <li class="footer__list-item"><a href="#" class="footer__list-link">Кардиганы</a></li>
                    <li class="footer__list-item"><a href="#" class="footer__list-link">Толстовки</a></li>
                  </ul>
              </div>
              <div class="footer__social">
                  <div class="footer__icons">
                    <a href="#" class="footer__icon"><img src="./img/footer/instagram.svg" alt="instagram" class="footer__icon-img"/></a>
                    <a href="#" class="footer__icon"><img src="./img/footer/facebook.svg" alt="facebook" class="footer__icon-img"/></a>
                    <a href="#" class="footer__icon"><img src="./img/footer/twitter.svg" alt="twitter" class="footer__icon-img"/></a>
                  </div>
                  <img class="footer__social-image" src="./img/footer/visa-mastercard.png" alt="card"/>
              </div>
          </div>
      </div>
      </footer>
  )
}

export default Footer