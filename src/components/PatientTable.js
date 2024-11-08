import React from 'react';
import '../styles/patientStyles.css';

function PatientTable({ data }) {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Test Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((patient, index) => (
            <tr key={index}>
              <td>{patient.id}</td>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.assignedTest}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PatientTable;
