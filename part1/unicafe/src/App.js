import { useState } from 'react'


const Header = (props) => (
  <header>
    <h1>Welcome to Unicafe!</h1>
    <h2>Please give us your feedback</h2>
  </header>
)

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const FeedbackSection = ({feedbackIncreasers, feedbackTexts}) => {
  return (
    <section id="feedback-section">
      <Button onClick={feedbackIncreasers[0]} text={feedbackTexts[0]}/>
      <Button onClick={feedbackIncreasers[1]} text={feedbackTexts[1]}/>
      <Button onClick={feedbackIncreasers[2]} text={feedbackTexts[2]}/>
    </section>
  )
};


const StatisticLine = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({feedback, feedbackTexts}) => {
  const totalScores = feedback.reduce((currentSum, value) => currentSum + value, 0);
  // Assume feedback[0] is good and feedback[2] is bad
  let averageScore = (feedback[0] - feedback[2]) / totalScores;
  averageScore = Math.round(averageScore * 10) / 10;
  let positiveScore = feedback[0] * 100 / totalScores;
  positiveScore = Math.round(positiveScore * 10) / 10;
  if (totalScores === 0) {
    return (
      <section id="statistics-section">
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </section>
    )
  }
  return (
    <section id="statistics-section">
      <h2>Statistics</h2>
      <table>
        <tbody>
      <StatisticLine text={feedbackTexts[0]} value={feedback[0]} />
      <StatisticLine text={feedbackTexts[1]} value={feedback[1]} />
      <StatisticLine text={feedbackTexts[2]} value={feedback[2]} />
      <StatisticLine text="Total" value={totalScores} />
      <StatisticLine text="Average" value={averageScore} />
      <StatisticLine text="Positive" value={`${positiveScore} %`} />
        </tbody>
      </table>
    </section>
  )
};


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedback = [good, neutral, bad];
  const feedbackIncreasers = [
    () => setGood(good + 1),
    () => setNeutral(neutral + 1),
    () => setBad(bad +1)
  ];
  const feedbackTexts = ["Good", "Neutral", "Bad"];
  return (
    <>
      <Header />
      <FeedbackSection feedbackIncreasers={feedbackIncreasers} feedbackTexts={feedbackTexts}/>
      <Statistics feedback={feedback} feedbackTexts={feedbackTexts} />
    </>
  )
}

export default App