import React from "react";

const DeleteButton = ({ deletePerson }) => {
  return <button onClick={deletePerson}>Delete</button>;
};

const PersonLine = ({ person, deletePerson }) => {
  return (
    <li>
      {person.name} {person.number} <DeleteButton deletePerson={deletePerson}/>
    </li>
  );
};

const Persons = ({ persons, deletePerson }) => (
  <ul>
    {persons.map((person) => (
      <PersonLine
        key={person.id}
        person={person}
        deletePerson={() => deletePerson(person)}
      />
    ))}
  </ul>
);

export default Persons;
