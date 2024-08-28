import React from 'react';
import EmployeeRow from './EmployeeRow';

function EmployeeTable({ employees, handleEdit, handleDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Salary</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <EmployeeRow key={employee.id} employee={employee} handleEdit={handleEdit} handleDelete={handleDelete} />
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeTable;
