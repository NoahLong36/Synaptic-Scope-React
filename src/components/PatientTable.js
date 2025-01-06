import React from 'react';
import '../styles/patientStyles.css';

const PatientTable = ({ data, onPatientClick }) => {
  return (
    <table className="patient-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Assignment Status</th>
          <th>Due Date</th>
        </tr>
      </thead>
      <tbody>
        {data.map((patient) => (
          <tr key={patient.id}>
            <td>{patient.id}</td>
            <td
              onClick={() => onPatientClick(patient)} 
              style={{ cursor: 'pointer', textDecoration: 'underline', color: 'blue' }}
            >
              {patient.name}
            </td>
            <td>
              {patient.assignedTest === 'True' ? patient.testPlanId : 'Unassigned'}
            </td>
            <td>{patient.dueDate || 'N/A'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PatientTable;
