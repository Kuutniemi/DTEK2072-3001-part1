const Header = ({ course }) => {
  return <h1>{course}</h1>;
};
const Content = ({ part, exc }) => {
  const Part = ({ part, exc }) => {
    return (
      <p>
        {part} {exc}
      </p>
    );
  };
  return (
    <div>
      <Part part={part.part1} exc={exc.exercises1} />
      <Part part={part.part2} exc={exc.exercises2} />
      <Part part={part.part3} exc={exc.exercises3} />
    </div>
  );
};
const Total = ({ exc }) => {
  return (
    <p>
      Number of exercises {exc.exercises1 + exc.exercises2 + exc.exercises3}
    </p>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        part={{ part1, part2, part3 }}
        exc={{ exercises1, exercises2, exercises3 }}
      />
      <Total exc={{ exercises1, exercises2, exercises3 }} />
    </div>
  );
};

export default App;
