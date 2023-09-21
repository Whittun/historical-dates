import articles from "../../data/articles.json";
import { Swiper, SwiperSlide } from "swiper/react";

import { useSwiper } from "swiper/react";

import "swiper/scss";
import "swiper/scss/free-mode";
import "swiper/css/bundle";

import { FreeMode, Navigation} from 'swiper/modules';

function Slider() {
  
  const swiper = useSwiper();

  return (
    <section className="slider">
      <div className="slider__article-wrapper">
        <Swiper wrapperClass="slider__article-list" wrapperTag="ul"
          slidesPerView={1.58}
          spaceBetween={30}
          freeMode={true}
          navigation={{
            nextEl: ".slider__article-control--next",
            prevEl: ".slider__article-control--back",
          }}
          modules={[FreeMode, Navigation]}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            900: {
              slidesPerView: 2,
            },
            1300: {
              slidesPerView: 3,
              spaceBetween: 90,
            },
          }}
        >
          {articles[0].texts.map((item) =>
            <SwiperSlide className="slider__article-item" tag="li">
              <p className="slider__year">{item.date}</p>
              <p className="slider__text">{item.text}</p>
            </SwiperSlide>
          )}
        </Swiper>
        <button className="slider__article-control slider__article-control--back"></button>
        <button className="slider__article-control slider__article-control--next"></button>
      </div>
      <div className="slider__controls">
          <div className="slider__topic-switching-wrapper">
            <p className="slider__number">
              06/06
            </p>
            <ul className="slider__topic-switching-list">
              <li className="slider__topic-switching-item">
                <button className="slider__topic-switching-button"></button>
              </li>
              <li className="slider__topic-switching-item">
                <button className="slider__topic-switching-button slider__topic-switching-button--inactive"></button>
              </li>
            </ul>
          </div>
          <ul className="slider__pagination-list">
            <li className="slider__pagination-item">
              <button className="slider__pagination-button"></button>
            </li>
            <li className="slider__pagination-item">
              <button className="slider__pagination-button"></button>
            </li>
            <li className="slider__pagination-item">
              <button className="slider__pagination-button"></button>
            </li>
            <li className="slider__pagination-item">
              <button className="slider__pagination-button"></button>
            </li>
            <li className="slider__pagination-item">
              <button className="slider__pagination-button"></button>
            </li>
            <li className="slider__pagination-item">
              <button className="slider__pagination-button slider__pagination-button--active"></button>
            </li>
          </ul>
        </div>
    </section>
    /*
      <section className="slider">
        
          <ul className="slider__article-list">
            {articles[0].texts.map((item) =>
              <li className="slider__article-item">
                <p className="slider__year">{item.date}</p>
                <p className="slider__text">{item.text}</p>
              </li>
            )}
          </ul> 
          <button className="slider__article-control slider__article-control--back"></button>
          <button className="slider__article-control slider__article-control--next"></button>
        </div>
        <div className="slider__controls">
          <div className="slider__topic-switching-wrapper">
            <p className="slider__number">
              06/06
            </p>
            <ul className="slider__topic-switching-list">
              <li className="slider__topic-switching-item">
                <button className="slider__topic-switching-button"></button>
              </li>
              <li className="slider__topic-switching-item">
                <button className="slider__topic-switching-button slider__topic-switching-button--inactive"></button>
              </li>
            </ul>
          </div>
          <ul className="slider__pagination-list">
            <li className="slider__pagination-item">
              <button className="slider__pagination-button"></button>
            </li>
            <li className="slider__pagination-item">
              <button className="slider__pagination-button"></button>
            </li>
            <li className="slider__pagination-item">
              <button className="slider__pagination-button"></button>
            </li>
            <li className="slider__pagination-item">
              <button className="slider__pagination-button"></button>
            </li>
            <li className="slider__pagination-item">
              <button className="slider__pagination-button"></button>
            </li>
            <li className="slider__pagination-item">
              <button className="slider__pagination-button slider__pagination-button--active"></button>
            </li>
          </ul>
        </div>
      </section>
    */
  )
}

export default Slider;