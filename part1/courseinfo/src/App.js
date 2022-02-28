// const Header = (props) => {
//   console.log('Header props:', props)
//   return(
//     <h1>{props.course.name}</h1>
//   )
// };

// const Part = (props) => {
//   return(
//     <p>{props.part.name} {props.part.exercises}</p>
//   )
// };

// const Content = (props) => {
//   console.log('Content props:', props)
//   return (
//     <div>
//       <Part part={props.course.parts[0]} />
//       <Part part={props.course.parts[1]} />
//       <Part part={props.course.parts[2]} />
//     </div>
//   )
// };

// const Total = (props) => {
//   console.log('Total props:', props)
//   return (
//     <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
//   )
// };

// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name:'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   };

//   return (
//     <div>
//       <Header course={course} />
//       <Content course={course} />
//       <Total course={course} />
//     </div>
//   )
// };

// export default App;

import { useState } from 'react'


const Display = ({ counter }) => <div>{counter}</div>;


const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })
  
  const handleLeftClick = () => {
    setClicks({ ...clicks, left: clicks.left + 1 });
  }

  const handleRightClick = () => {
    setClicks({ ...clicks, right: clicks.right + 1 });
  }

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
    </div>
  )
};

export default App