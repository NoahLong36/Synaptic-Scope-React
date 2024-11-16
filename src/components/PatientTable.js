import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/patientStyles.css';

const PatientTable = ({ data }) => {
  return (
    <table className="patient-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Test Status</th>
          <th>Test Plan</th>
        </tr>
      </thead>
      <tbody>
        {data.map((patient) => (
          <tr key={patient.id}>
            <td>{patient.id}</td>
            <td>{patient.name}</td>
            <td>{patient.age}</td>
            <td>{patient.assignedTest}</td>
            <td>
              <Link to={`/landing/${patient.testPlanId}`} className="test-plan-link">
                {patient.testPlanId}
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PatientTable;
