import { useState, useEffect } from "react";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Filter from "./components/Filter";

import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [currentFilter, setCurrentFilter] = useState("");

  // Initial data fetching effect
  useEffect(() => {
    console.log('effect');
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled');
        setPersons(response.data);
      })
  }, [])

  // Case insensitive filter for the phonebook
  /* If I add the filtering logic to Filter, the filteredPersons
  variable does not update when adding a new person. */
  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(currentFilter.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
      />
      <h3>Add a new entry</h3>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} />
    </div>
  );
};

export default App;
