import React from "react";

const Header = (props) => {
  console.log("Header props:", props);
  return <h2>{props.course.name}</h2>;
};

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};

const Content = (props) => {
  console.log("Content props:", props);
  const { course } = props;
  return (
    <div>
      {course.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
};

const Total = (props) => {
  console.log("Total props:", props);
  const { course } = props;
  const totalExercises = course.parts.reduce(
    (partialSum, curVal) => partialSum + curVal.exercises,
    0
  );
  return (
    <p>
      <strong>Number of exercises in total: {totalExercises}</strong>
    </p>
  );
};

const Course = ({ course }) => (
  <div>
    <Header course={course} />
    <Content course={course} />
    <Total course={course} />
  </div>
);

export default Course;
