import Period from "./components/Period/Period";
import Topics from "./components/Topics/Topics";
import Slider from "./components/Slider/Slider";

import "./styles/index.scss";

function App() {
  return (
    <div className="App">
      <h1>
        Исторические даты
      </h1>
      <Period />
      <Topics />
      <Slider />
    </div>
  );
}

export default App;
