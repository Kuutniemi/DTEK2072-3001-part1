import { useState } from "react";

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [list, setList] = useState([]);
  const [ave, setAverage] = useState(0);

  const summa = list.reduce((sum, item) => sum + item, 0);
  const keskiarvo = summa / list.length;

  const posi = list.filter((value) => value > 0);
  const posirosentti = (posi.length / list.length) * 100;

  const handleButtonClick = (feedback) => {
    // console.log(list);
    if (feedback === "good") {
      setGood(good + 1);
      setList([...list, 1]);
    }
    if (feedback === "neutral") {
      setNeutral(neutral + 1);
      setList([...list, 0]);
    }
    if (feedback === "bad") {
      setBad(bad + 1);
      setList([...list, -1]);
    }
  };

  return (
    <div>
      {/* Feedback */}
      <div>
        <h1>give feedback</h1>
        <button onClick={() => handleButtonClick("good")}>good</button>
        <button onClick={() => handleButtonClick("neutral")}>neutral</button>
        <button onClick={() => handleButtonClick("bad")}>bad</button>
      </div>

      {/* Statistics */}
      <div>
        <h1>statistics</h1>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {good + neutral + bad}</p>
        <p>average {keskiarvo}</p>
        <p>positive {posirosentti}%</p>
      </div>
    </div>
  );
};

export default App;
