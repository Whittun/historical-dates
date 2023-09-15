import Period from "./components/Period/Period";
import Topics from "./components/Topics/Topics";
import Slider from "./components/Slider/Slider";

import "./styles/index.scss";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="main-title">
          Исторические <span className="break-line">даты</span>
        </h1>
        <Period />
        <Topics />
        <Slider />
      </div>
    </div>
  );
}

export default App;
