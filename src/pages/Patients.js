import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardStats from '../components/PatientStats';
import PatientTable from '../components/PatientTable';
import '../styles/patientStyles.css';

function Patients() {
  const generateRandomTestPlanId = () => {
    const testIds = [1, 2, 3, 4];
    const randomLength = Math.floor(Math.random() * testIds.length) + 1;
    return Array.from({ length: randomLength }, () =>
      testIds[Math.floor(Math.random() * testIds.length)]
    ).join('');
  };

  const [patientData, setPatientData] = useState([
    { id: '001', name: 'John Doe', age: 34, email: 'johndoe@example.com', assignedTest: 'False', testPlanId: generateRandomTestPlanId(), dueDate: '2024-11-20', gender: 'Male', sessionsCompleted: 5, joinDate: '2023-01-10' },
    { id: '002', name: 'Jane Smith', age: 29, email: 'janesmith@example.com', assignedTest: 'False', testPlanId: generateRandomTestPlanId(), dueDate: '2024-12-01', gender: 'Female', sessionsCompleted: 3, joinDate: '2023-03-15' },
    { id: '003', name: 'Alice Johnson', age: 42, email: 'alicejohnson@example.com', assignedTest: 'False', testPlanId: generateRandomTestPlanId(), dueDate: '2024-11-25', gender: 'Female', sessionsCompleted: 7, joinDate: '2022-08-21' },
    { id: '004', name: 'Bob Brown', age: 50, email: 'bobbrown@example.com', assignedTest: 'False', testPlanId: generateRandomTestPlanId(), dueDate: '2024-12-15', gender: 'Male', sessionsCompleted: 10, joinDate: '2021-11-11' },
    { id: '005', name: 'Chris Green', age: 23, email: 'chrisgreen@example.com', assignedTest: 'False', testPlanId: generateRandomTestPlanId(), dueDate: '2024-11-30', gender: 'Non-binary', sessionsCompleted: 2, joinDate: '2024-05-02' },
  ]);

  const [selectedPatientIndex, setSelectedPatientIndex] = useState(null);
  const navigate = useNavigate();

  const handlePatientClick = (index) => {
    setSelectedPatientIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedPatientIndex(null);
  };

  const handleNextPatient = () => {
    setSelectedPatientIndex((prevIndex) => (prevIndex + 1) % patientData.length);
  };

  const handlePreviousPatient = () => {
    setSelectedPatientIndex((prevIndex) =>
      prevIndex === 0 ? patientData.length - 1 : prevIndex - 1
    );
  };

  const navigateToTestPlan = (testPlanId) => {
    navigate(`/landing/${testPlanId}`);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPatientData((prevData) =>
      prevData.map((patient, index) =>
        index === selectedPatientIndex
          ? { ...patient, [name]: value }
          : patient
      )
    );
  };

  const totalPatients = patientData.length;
  const completedTests = patientData.filter((patient) => patient.assignedTest === 'True').length;
  const unassignedTests = patientData.filter((patient) => patient.assignedTest === 'False').length;

  const selectedPatient =
    selectedPatientIndex !== null ? patientData[selectedPatientIndex] : null;

  return (
    <div className="App">
      <h1>Patient Dashboard</h1>
      <DashboardStats 
        totalPatients={totalPatients} 
        completedTests={completedTests} 
        unassignedTests={unassignedTests} 
      />
      <PatientTable
        data={patientData}
        onPatientClick={(patient) =>
          handlePatientClick(patientData.findIndex((p) => p.id === patient.id))
        }
      />
      {selectedPatient && (
        <div className="patient-modal">
          <div className="modal-content">
            <div className="modal-header">
              <button className="arrow-button" onClick={handlePreviousPatient}>
                &larr;
              </button>
              <h2>Patient Details</h2>
              <button className="arrow-button" onClick={handleNextPatient}>
                &rarr;
              </button>
              <button className="close-button" onClick={handleCloseModal}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="modal-field">
                <label><strong>ID:</strong></label>
                <p>{selectedPatient.id}</p>
              </div>
              <div className="modal-field">
                <label><strong>Name:</strong></label>
                <p>{selectedPatient.name}</p>
              </div>
              <div className="modal-field">
                <label><strong>Email:</strong></label>
                <p>{selectedPatient.email}</p>
              </div>
              <div className="modal-field">
                <label><strong>Assignment Status:</strong></label>
                <select
                  name="assignedTest"
                  value={selectedPatient.assignedTest}
                  onChange={handleInputChange}
                >
                  <option value="True">Assigned</option>
                  <option value="False">Unassigned</option>
                </select>
              </div>
              <div className="modal-field">
                <label><strong>Test Plan ID:</strong></label>
                <p
                  style={{
                    color: 'blue',
                    textDecoration: 'underline',
                    cursor: 'pointer',
                  }}
                  onClick={() => navigateToTestPlan(selectedPatient.testPlanId)}
                >
                  {selectedPatient.testPlanId}
                </p>
              </div>
              <div className="modal-field">
                <label><strong>Due Date:</strong></label>
                <input
                  type="date"
                  name="dueDate"
                  value={selectedPatient.dueDate}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button className="save-button" onClick={handleCloseModal}>
                Save
              </button>
              <button className="cancel-button" onClick={handleCloseModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Patients;
