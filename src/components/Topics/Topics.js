function Topics() {
  return (
    <section className="topics">
      <ul className="topics__list">
        <li className="topics__item">
          <button className="topics__button"><span className="topics__number">1</span></button>
          <h2 className="topics__title">
            Технологии
          </h2>
        </li>
        <li className="topics__item">
          <button className="topics__button"><span className="topics__number">2</span></button>
          <h2 className="topics__title">
            Кино
          </h2>
        </li>
        <li className="topics__item topics__item--active">
          <button className="topics__button"><span className="topics__number">3</span></button>
          <h2 className="topics__title">
            Литература
          </h2>
        </li>
        <li className="topics__item">
          <button className="topics__button"><span className="topics__number">4</span></button>
          <h2 className="topics__title">
            Игры
          </h2>
        </li>
        <li className="topics__item">
          <button className="topics__button"><span className="topics__number">5</span></button>
          <h2 className="topics__title">
            Спорт
          </h2>
        </li>
        <li className="topics__item">
          <button className="topics__button"><span className="topics__number">6</span></button>
          <h2 className="topics__title">
            Наука
          </h2>
        </li>
      </ul>
    </section>
  )
}

export default Topics;