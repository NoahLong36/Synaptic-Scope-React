import React, { useState } from 'react';
import DashboardStats from '../components/PatientStats';
import PatientTable from '../components/PatientTable';
import AddPatientForm from '../components/AddPatientForm';
import '../styles/patientStyles.css'

function Patients() {
  const [patientData, setPatientData] = useState([
    { id: '001', name: 'John Doe', age: 34, assignedTest: 'False' },
    { id: '002', name: 'Jane Smith', age: 29, assignedTest: 'False' },
    { id: '003', name: 'Alice Johnson', age: 42, assignedTest: 'False' },
    { id: '004', name: 'Bob Brown', age: 50, assignedTest: 'False' },
    { id: '005', name: 'Chris Green', age: 23, assignedTest: 'False' }
  ]);

  const [showForm, setShowForm] = useState(false);

  const totalPatients = patientData.length;
  const completedTests = patientData.filter(patient => patient.assignedTest === 'True').length;
  const unassignedTests = patientData.filter(patient => patient.assignedTest === 'False').length;

  const handleAddPatient = (newPatient) => {
    const newId = String(patientData.length + 1).padStart(3, '0'); // ID auto-increments
    setPatientData([...patientData, { id: newId, ...newPatient }]);
  };

  return (
    <div className="App">
      <h1>Patient Dashboard</h1>
      <DashboardStats 
        totalPatients={totalPatients} 
        completedTests={completedTests} 
        unassignedTests={unassignedTests} 
      />

      <button onClick={() => setShowForm(true)}>Add New Patient</button>

      {showForm && (
        <AddPatientForm 
          onAddPatient={handleAddPatient} 
          onClose={() => setShowForm(false)} 
        />
      )}

      <PatientTable data={patientData} />
    </div>
  );
}

export default Patients;
