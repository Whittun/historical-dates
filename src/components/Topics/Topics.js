import articles from "../../data/articles.json";

function Topics(props) {
  return (
    <section className="topics">
      <ul className="topics__list">
        {
          articles.map((article, count) => 
            <li className={((props.topic === count) ? "topics__item--active " : "") + "topics__item"}>
              <button onClick={() => {props.setTopic(count)}} className="topics__button"><span className="topics__number">{count + 1}</span></button>
              <h2 className="topics__title">
                {article.title}
              </h2>
            </li>
          )
        }
      </ul>
    </section>
  )
}

export default Topics;