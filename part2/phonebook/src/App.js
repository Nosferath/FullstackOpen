import { useState } from "react";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Filter from "./components/Filter";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [currentFilter, setCurrentFilter] = useState("");

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
