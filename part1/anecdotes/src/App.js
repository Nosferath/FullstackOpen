import { useState } from 'react'


const RandomButton = ({setSelected, nAnecdotes}) => {
  const getIndex = () => Math.floor(Math.random() * nAnecdotes);
  return (
    <p><button onClick={() => setSelected(getIndex())}>Next anecdote</button></p>
  )
}


const VoteButton = ({selected, votes, setVotes}) => {
  const votesClone = [...votes];
  votesClone[selected] += 1;
  
  return (
    <p><button onClick={() => setVotes(votesClone)}>Vote</button></p>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)

  const [votes, setVotes] = useState(new Uint32Array(anecdotes.length));

  const mostVotesIndex = votes.indexOf(Math.max(...votes));

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>This anecdote has {votes[selected]} votes</p>
      <VoteButton selected={selected} votes={votes} setVotes={setVotes}/>
      <RandomButton setSelected={setSelected} nAnecdotes={anecdotes.length} />

      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[mostVotesIndex]}</p>
      <p>This anecdote has {votes[mostVotesIndex]} votes</p>
    </div>
  )
}

export default App