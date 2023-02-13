import { useState } from "react";

const Statistics = ({ list, values }) => {
  const summa = list.reduce((sum, item) => sum + item, 0);
  const keskiarvo = summa / list.length;

  const posi = list.filter((value) => value > 0);
  const posirosentti = (posi.length / list.length) * 100;

  return (
    <div>
      <h1>statistics</h1>
      <p>good {values.good}</p>
      <p>neutral {values.neutral}</p>
      <p>bad {values.bad}</p>
      <p>all {values.good + values.neutral + values.bad}</p>
      <p>average {keskiarvo.toFixed(2)}</p>
      <p>positive {posirosentti.toFixed(1)}%</p>
    </div>
  );
};

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [list, setList] = useState([]);

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
      <Statistics values={{ good, neutral, bad }} list={list} />
    </div>
  );
};

export default App;
