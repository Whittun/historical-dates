import articles from "../../data/articles.json";

function Slider() {
  return (
    <section className="slider">
      <div className="slider__article-wrapper">
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
  )
}

export default Slider;