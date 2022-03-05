import React from "react";

const PersonLine = ({ person }) => {
  return (
    <li>
      {person.name} {person.number}
    </li>
  );
};

const Persons = ({ persons }) => (
  <ul>
    {persons.map((person) => (
      <PersonLine key={person.name} person={person} />
    ))}
  </ul>
);

export default Persons;
