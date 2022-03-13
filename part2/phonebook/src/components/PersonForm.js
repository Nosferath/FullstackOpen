import React from "react";
import personsService from "../services/persons";

const PersonForm = ({
  persons,
  setPersons,
  newName,
  setNewName,
  newNumber,
  setNewNumber,
}) => {
  const addPerson = (event) => {
    event.preventDefault();
    const currentNames = persons.map((person) => person.name);

    if (currentNames.includes(newName)) {
      // Add/modify an existing name
      const confirm = window.confirm(
        `${newName} is already added to phonebook. Replace the old number with a new one?`
      );
      if (!confirm) {
        return;
      }
      // Get the ID of the person to modify
      const personId = persons.filter(person => person.name === newName)[0].id;
      const modifiedPerson = {
        id: personId,
        name: newName,
        number: newNumber,
      };
      personsService.put(modifiedPerson).then((response) => {
        console.log("modify response", response);
        const modifiedPersons = persons.map((person) => (
          // Modify only the current person
          person.id === response.id ? response : person
        ));
        setPersons(modifiedPersons);
      });
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
      };
      personsService.create(newPerson).then((response) => {
        setPersons(persons.concat(response));
        setNewName("");
        setNewNumber("");
      });
    }
  };

  const handleNameChange = (event) => {
    // console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    // console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <form onSubmit={addPerson}>
        <div>
          Name:
          <input onChange={handleNameChange} value={newName} />
        </div>
        <div>
          Number:
          <input onChange={handleNumberChange} value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
