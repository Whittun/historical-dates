import Period from "./components/Period/Period";
import Topics from "./components/Topics/Topics";
import Slider from "./components/Slider/Slider";

import { useState } from "react";

import "./styles/index.scss";

function App() {

  const [topic, setTopic] = useState(0);

  return (
    <div className="App">
      <div className="container">
        <h1 className="main-title">
          Исторические <span className="break-line">даты</span>
        </h1>
        <Period topic={topic} />
        <Topics topic={topic} setTopic={setTopic} />
        <Slider topic={topic} setTopic={setTopic} />
      </div>
    </div>
  );
}

export default App;
