import React from 'react';

function FilterDropdown({ genderFilter, handleFilterChange }) {
  return (
    <select value={genderFilter} onChange={(e) => handleFilterChange(e.target.value)}>
      <option value="">ALL </option>
      <option value="Male">MALE</option>
      <option value="Female">FEMALE</option>
    </select>
  );
}

export default FilterDropdown;
