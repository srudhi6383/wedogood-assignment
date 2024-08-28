import React, { useState } from 'react';
import MOCK_DATA from './MOCK_DATA.json';
import EmployeeTable from './components/EmployeeTable';
import SearchBar from './components/SearchBar';
import SortButtons from './components/SortButtons';
import FilterDropdown from './components/FilterDropdown';
import useSearch from './hooks/useSearch';
import './App.css'; 

function App() {
  const [employees, setEmployees] = useState(MOCK_DATA);
  const [sortOrder, setSortOrder] = useState(null); // 'asc' or 'desc'
  const [genderFilter, setGenderFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEmployees = useSearch(employees, searchQuery);

  const handleSort = (order) => {
    const sortedEmployees = [...filteredEmployees].sort((a, b) => {
      if (order === 'asc') return a.salary - b.salary;
      if (order === 'desc') return b.salary - a.salary;
      return 0;
    });
    setEmployees(sortedEmployees);
    setSortOrder(order);
  };

  const handleFilterChange = (filter) => {
    setGenderFilter(filter);
  };

  const handleEdit = (id, field, value) => {
    const updatedEmployees = employees.map((employee) =>
      employee.id === id ? { ...employee, [field]: value } : employee
    );
    setEmployees(updatedEmployees);
  };

  const handleDelete = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
  };

  const displayedEmployees = filteredEmployees.filter(
    (employee) => !genderFilter || employee.gender === genderFilter
  );

  return (
    <div className="App">
      <h1>Employee Management System</h1>
      <div className="container">
        <div className="controls">
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <SortButtons handleSort={handleSort} sortOrder={sortOrder} />
          <FilterDropdown genderFilter={genderFilter} handleFilterChange={handleFilterChange} />
        </div>
        <EmployeeTable employees={displayedEmployees} handleEdit={handleEdit} handleDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
