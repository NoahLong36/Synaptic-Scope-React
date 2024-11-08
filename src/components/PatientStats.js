import React from 'react';
import '../styles/patientStyles.css';

function PatientStats({ totalPatients, completedTests, unassignedTests }) {
  return (
    <div className="stats-container">
      <div className="stat-box">
        <h3>Total Patients</h3>
        <p>{totalPatients}</p>
      </div>
      <div className="stat-box">
        <h3>Completed Tests</h3>
        <p>{completedTests}</p>
      </div>
      <div className="stat-box">
        <h3>Unassigned Tests</h3>
        <p>{unassignedTests}</p>
      </div>
    </div>
  );
}

export default PatientStats;
