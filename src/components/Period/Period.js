import articles from "../../data/articles.json";

function Period(props) {
  return (
    <section className="period">
      <p className="period__from">
        {articles[props.topic].from}
      </p>
      <p className="period__to">
        {articles[props.topic].to}
      </p>
    </section>
  )
}

export default Period;