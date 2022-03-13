import { useState, useEffect } from "react";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Filter from "./components/Filter";

import personsService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [currentFilter, setCurrentFilter] = useState("");
  const [filteredPersons, setFilteredPersons] = useState(persons);

  // Initial data fetching effect
  useEffect(() => {
    console.log("initial effect");
    personsService.getAll().then((response) => setPersons(response));
  }, []);

  const deletePerson = (person) => {
    const confirmDelete = window.confirm(`Delete ${person.name}?`);
    if (confirmDelete) {
      personsService.remove(person).then((response) => {
        setPersons(persons.filter((p) => p.id !== person.id));
      });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        persons={persons}
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
        setFilteredPersons={setFilteredPersons}
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
      <Persons
        persons={filteredPersons}
        deletePerson={deletePerson}
      />
    </div>
  );
};

export default App;
