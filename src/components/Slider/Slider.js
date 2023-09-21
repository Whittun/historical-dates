import articles from "../../data/articles.json";
import { Swiper, SwiperSlide } from "swiper/react";

import { useSwiper } from "swiper/react";

import "swiper/scss";
import "swiper/scss/free-mode";
import "swiper/css/bundle";

import { FreeMode, Navigation} from 'swiper/modules';

function Slider(props) {

  function changeTopics(direction) {
    let count = props.topic + 1;

    if (direction === "back" && count > 1) {
      props.setTopic(props.topic - 1)
    }

    if (direction === "next" && count < 6) {
      props.setTopic(props.topic + 1)
    }
  }

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
          {articles[props.topic].texts.map((item) =>
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
              0{props.topic + 1}/06
            </p>
            <ul className="slider__topic-switching-list">
              <li className="slider__topic-switching-item">
                <button 
                  onClick={() => {changeTopics("back")}} 
                  className={((props.topic === 0) ? "slider__topic-switching-button--inactive " : "") + "slider__topic-switching-button"}
                >
                </button>
              </li>
              <li className="slider__topic-switching-item">
                <button 
                  onClick={() => {changeTopics("next")}} 
                  className={((props.topic === 5) ? "slider__topic-switching-button--inactive " : "") + "slider__topic-switching-button"}
                >
                </button>
              </li>
            </ul>
          </div>
          <ul className="slider__pagination-list">
            {
              articles.map((_, count) => 
              <li className="slider__pagination-item">
                <button 
                  onClick={() => props.setTopic(count)}
                  className={((props.topic === count) ? "slider__pagination-button--active " : "") + "slider__pagination-button"}
                >
                </button>
              </li>
              )
            }
          </ul>
        </div>
    </section>
  )
}

export default Slider;