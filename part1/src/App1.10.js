import { useState } from "react";

const Statistics = ({ list, values }) => {
  let g = values.good;
  let n = values.neutral;
  let b = values.bad;
  const summa = list.reduce((sum, item) => sum + item, 0);
  const keskiarvo = summa / list.length;

  const posi = list.filter((value) => value > 0);
  const posirosentti = (posi.length / list.length) * 100;

  const StatisticsLine = ({ text, value }) => {
    return (
      <p>
        {text} {value}
      </p>
    );
  };

  return (
    <div>
      <h1>statistics</h1>
      {b || g || n !== 0 ? (
        <>
          <StatisticsLine text={"good"} value={g} />
          <StatisticsLine text={"neutral"} value={n} />
          <StatisticsLine text={"bad"} value={b} />
          <StatisticsLine text={"all"} value={g + n + b} />
          <StatisticsLine text={"average"} value={keskiarvo.toFixed(2)} />
          <StatisticsLine
            text={"positive"}
            value={posirosentti.toFixed(2) + "%"}
          />
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

const Button = ({ title, onButtonClick }) => {
  return <button onClick={() => onButtonClick(title)}>{title}</button>;
};

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [list, setList] = useState([]);

  const handleButtonClick = (feedback) => {
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
        <Button title={"good"} value={1} onButtonClick={handleButtonClick} />
        <Button title={"neutral"} value={1} onButtonClick={handleButtonClick} />
        <Button title={"bad"} value={1} onButtonClick={handleButtonClick} />
      </div>

      {/* Statistics */}
      <Statistics values={{ good, neutral, bad }} list={list} />
    </div>
  );
};

export default App;
