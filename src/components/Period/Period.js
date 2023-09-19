import articles from "../../data/articles.json";

function Period() {
  return (
    <section className="period">
      <p className="period__from">
        {articles[0].from}
      </p>
      <p className="period__to">
        {articles[0].to}
      </p>
    </section>
  )
}

export default Period;