const Hello = (props) => {
  return (
    <div>
      <p>Hello, my dear {props.name}, you are {props.age} years old</p>
    </div>
  )
};

const Footer = () => {
  return (
    <div>
      Greeting App created by <a href="https://github.com/Nosferath">Nosferath</a>, 
      and thanks to mluukkai.
    </div>
  )
}

const App = () => {
  const name = 'Peter';
  const age = 10;
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Footer />
    </>
  )
};

export default App;
