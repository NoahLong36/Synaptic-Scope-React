import React, { useState } from 'react';

function AddPatientForm({ onAddPatient, onClose }) {
  const [newPatient, setNewPatient] = useState({ name: '', age: '', assignedTest: 'False' });

  const handleSubmit = () => {
    onAddPatient(newPatient); // Call the function passed in from parent to add patient
    onClose(); // Close the form
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add New Patient</h2>
        <label>
          Name:
          <input
            type="text"
            value={newPatient.name}
            onChange={(e) => setNewPatient({ ...newPatient, name: e.target.value })}
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            value={newPatient.age}
            onChange={(e) => setNewPatient({ ...newPatient, age: e.target.value })}
          />
        </label>
        <label>
          Test Assigned:
          <select
            value={newPatient.assignedTest}
            onChange={(e) => setNewPatient({ ...newPatient, assignedTest: e.target.value })}
          >
            <option value="False">Unassigned</option>
            <option value="True">Assigned</option>
          </select>
        </label>
        <button onClick={handleSubmit}>Add Patient</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default AddPatientForm;
