function Topics() {
  return (
    <section className="topics">
      <ul className="topics__list">
        <li className="topics__item">
          <button className="topics__button">1</button>
          <h2 className="topics__title">
            Технологии
          </h2>
        </li>
        <li className="topics__item">
          <button className="topics__button">2</button>
          <h2 className="topics__title">
            Кино
          </h2>
        </li>
        <li className="topics__item">
          <button className="topics__button">3</button>
          <h2 className="topics__title">
            Литература
          </h2>
        </li>
        <li className="topics__item">
          <button className="topics__button">4</button>
          <h2 className="topics__title">
            Игры
          </h2>
        </li>
        <li className="topics__item">
          <button className="topics__button">5</button>
          <h2 className="topics__title">
            Спорт
          </h2>
        </li>
        <li className="topics__item">
          <button className="topics__button">6</button>
          <h2 className="topics__title">
            Наука
          </h2>
        </li>
      </ul>
    </section>
  )
}

export default Topics;