function Slider() {
  return (
    <section className="slider">
      <div className="slider__article-wrapper">
        <ul className="slider__article-list">
          <li className="slider__article-item">
            <p className="slider__year">2000</p>
            <p className="slider__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, nostrum ad ratione odio beatae sed minus dolorem facere. Quo accusantium quidem repellendus aut nemo quia obcaecati molestias atque voluptate laudantium!
            </p>
          </li>
          <li className="slider__article-item">
            <p className="slider__year">2001</p>
            <p className="slider__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, nostrum ad ratione odio beatae sed minus dolorem facere. Quo accusantium quidem repellendus aut nemo quia obcaecati molestias atque voluptate laudantium!
            </p>
          </li>
          <li className="slider__article-item">
            <p className="slider__year">2002</p>
            <p className="slider__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, nostrum ad ratione odio beatae sed minus dolorem facere. Quo accusantium quidem repellendus aut nemo quia obcaecati molestias atque voluptate laudantium!
            </p>
          </li>
          <li className="slider__article-item">
            <p className="slider__year">2003</p>
            <p className="slider__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, nostrum ad ratione odio beatae sed minus dolorem facere. Quo accusantium quidem repellendus aut nemo quia obcaecati molestias atque voluptate laudantium!
            </p>
          </li>
          <li className="slider__article-item">
            <p className="slider__year">2004</p>
            <p className="slider__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, nostrum ad ratione odio beatae sed minus dolorem facere. Quo accusantium quidem repellendus aut nemo quia obcaecati molestias atque voluptate laudantium!
            </p>
          </li>
          <li className="slider__article-item">
            <p className="slider__year">2005</p>
            <p className="slider__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, nostrum ad ratione odio beatae sed minus dolorem facere. Quo accusantium quidem repellendus aut nemo quia obcaecati molestias atque voluptate laudantium!
            </p>
          </li>
        </ul>
        <button className="slider__article-control slider__article-control--back"></button>
        <button className="slider__article-control slider__article-control--next"></button>
      </div>
      <div className="slider__controls">
        <p className="slider__number">
          06/06
        </p>
        <ul className="slider__topic-switching-list">
          <li className="slider__topic-switching-item">
            <button className="slider__topic-switching-button"></button>
          </li>
          <li className="slider__topic-switching-item">
            <button className="slider__topic-switching-button"></button>
          </li>
        </ul>
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
            <button className="slider__pagination-button"></button>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Slider;