import React from "react";
import { useEffect } from "react";

const Filter = ({
  persons,
  currentFilter,
  setCurrentFilter,
  setFilteredPersons,
}) => {
  useEffect(() => {
    /* Apply the filter to the list of persons
       whenever the filter or the persons change*/

    console.log("filter effect activated");
    setFilteredPersons(
      persons.filter((person) =>
        // Case insensitive filter
        person.name.toLowerCase().includes(currentFilter.toLowerCase())
      )
    );
  }, [currentFilter, persons, setFilteredPersons]);

  const filterNames = (event) => {
    const eventValue = event.target.value;
    setCurrentFilter(eventValue);
  };

  return (
    <p>
      Filter shown with
      <input onChange={filterNames} value={currentFilter} />
    </p>
  );
};

export default Filter;
