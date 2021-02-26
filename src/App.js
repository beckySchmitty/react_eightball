import './App.css';

import EightBall from "./EightBall"
import answersArray from "./helpers"

function App() {
  return (
    <div className="App">
      <EightBall answers={answersArray} />
    </div>
  );
}

export default App;
