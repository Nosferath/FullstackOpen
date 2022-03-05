import React from "react";

const Filter = ({ currentFilter, setCurrentFilter }) => {
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
