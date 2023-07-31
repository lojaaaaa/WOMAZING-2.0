import React from 'react'
import Button from '../../components/UI/Button/Button'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <section className="home" id="home">
        <div className="home__container container">
          <div className="swiper swiper--home">
            <div className="swiper-wrapper swiper-wrapper--home">
              <div className="swiper-slide">
                <h1 className="slider__title">Новые поступления <br></br> в этом сезоне</h1>
                <p className="slider__text">Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.</p>
                <div className="slider__buttons">
                  <a href="#" className="slider__button-arrow">
                    <img className="slider__button-arrowimg" src="./img/main/arrow-down.svg" alt="arrow-down"/>
                  </a>
                  <Link to={`/shop`}>
                    <Button text={'Открыть магазин'} color={'green'}/>
                  </Link>
                  {/* <a href="#" class=" button">Открыть магазин</a> */}
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
                        
          </div>
                        
          <div className="home__content">
            <img className="home__content-img" src="./img/main/main.jpg" alt="img" />
          </div>
        
        </div>
      </section>
        
      <section className="important">
        <div className="important__container container">
          <h2 className="important__title title">Что для нас важно</h2>
          <div className="important__cards">
            <div className="important__card">
              <img src="./img/important/quality.svg" alt="icon" className="important__card-icon"/>
              <p className="important__card-title">Качество</p>
              <p className="important__card-text">Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного качества</p>
            </div>
            <div className="important__card">
              <img src="./img/important/fast.svg" alt="icon" className="important__card-icon"/>
                <p className="important__card-title">Скорость</p>
                <p className="important__card-text">Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти единиц продукции в наших собственных цехах</p>
            </div>
            <div className="important__card">
              <img src="./img/important/hand.svg" alt="icon" className="important__card-icon"/>
              <p className="important__card-title">Ответственность</p>
              <p className="important__card-text">Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда - все это Womazing</p>
            </div>
          </div>
        </div>
      </section>
      {/* <section class="collection" id="collection">
                <div class="collection__container container">
                    <h2 class="collection__title title">Новая коллекция</h2>
                    <div class="collection__cards">
                        <div class="collection__card card">
                            <div class="collection__card-image card-image">
                                <img src="./img/collection/3.jpg" alt="card-img">
                            </div>
        
                            <a href="#" class="collection__card-title card-title">Футболка USA</a>
                            <p class="collection__card-text card-text"><span>$229</span> $129</p>
                        </div>
                        <div class="collection__card card">
                            <div class="collection__card-image card-image">
                                <img src="./img/collection/2.jpg" alt="card-img">
                            </div>
                            <a href="#" class="collection__card-title card-title">Купальник Glow</a>
                            <p class="collection__card-text card-text">$129</p>
                        </div>
                        <div class="collection__card card">
                            <div class="collection__card-image card-image">
                                <img src="./img/collection/1.jpg" alt="card-img">
                            </div>
                            <a href="#" class="collection__card-title card-title">Свитшот Sweet Shot</a>
                            <p class="collection__card-text card-text">$129</p>
                        </div>
                    </div>
                    <a href="./shop.html" class="collection__button button">Открыть магазин</a>
                </div>
      </section>
      <section class="team">
                <div class="team__container container">
                    <h2 class="team__title title">Команда мечты Womazing</h2>
                    <div class="team__content">
                        <div class="swiper swiper--team">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide"><img src="./img/team/1.jpg" alt="slide1"></div>
                                <div class="swiper-slide"><img src="./img/team/2.jpg" alt="slide2"></div>
                                <div class="swiper-slide"><img src="./img/team/3.jpg" alt="slide3"></div>
                            </div>
                            <div class="swiper-pagination"></div>
    
                            <div class="swiper-button-prev"></div>
                            <div class="swiper-button-next"></div>
        
                        </div>
                        
                        <div class="team__about">
                            <h3 class="team__about-title">Для каждой</h3>
                            <p class="team__about-text">Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.</p>
                            <p class="team__about-text">Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно подчеркивают достоинства каждой девушки.</p>
                            <a href="brand.html" class="team__about-link">Подробнее о бренде</a>
                        </div>
                    </div>
                </div>
      </section> */}
    </>
  )
}

export default Home