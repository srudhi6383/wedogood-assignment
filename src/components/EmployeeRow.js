import React, { useState } from 'react';

function EmployeeRow({ employee, handleEdit, handleDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedEmployee, setEditedEmployee] = useState(employee);

  const handleChange = (e) => {
    setEditedEmployee({ ...editedEmployee, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    handleEdit(employee.id, 'first_name', editedEmployee.first_name);
    handleEdit(employee.id, 'last_name', editedEmployee.last_name);
    handleEdit(employee.id, 'email', editedEmployee.email);
    handleEdit(employee.id, 'gender', editedEmployee.gender);
    handleEdit(employee.id, 'salary', editedEmployee.salary);
    setIsEditing(false);
  };

  return (
    <tr>
      <td>{employee.id}</td>
      <td>
        {isEditing ? (
          <input
            type="text"
            name="first_name"
            className="editable-input"
            value={editedEmployee.first_name}
            onChange={handleChange}
          />
        ) : (
          employee.first_name
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            name="last_name"
            className="editable-input"
            value={editedEmployee.last_name}
            onChange={handleChange}
          />
        ) : (
          employee.last_name
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="email"
            name="email"
            className="editable-input"
            value={editedEmployee.email}
            onChange={handleChange}
          />
        ) : (
          employee.email
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            name="gender"
            className="editable-input"
            value={editedEmployee.gender}
            onChange={handleChange}
          />
        ) : (
          employee.gender
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="number"
            name="salary"
            className="editable-input"
            value={editedEmployee.salary}
            onChange={handleChange}
          />
        ) : (
          employee.salary
        )}
      </td>
      <td>
        <div className="action-buttons">
          {isEditing ? (
            <>
              <button className="edit-button" onClick={handleSave}>Save</button>
              <button onClick={() => setIsEditing(false)}>Cancel</button>
            </>
          ) : (
            <>
              <button className="edit-button" onClick={() => setIsEditing(true)}>Edit</button>
              <button onClick={() => handleDelete(employee.id)}>Delete</button>
            </>
          )}
        </div>
      </td>
    </tr>
  );
}

export default EmployeeRow;
