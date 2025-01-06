import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';

class Database extends Component {
    constructor(props) {
      super(props);
      this.state = {
        patients: [
          {
            id: '1',
            username: 'jdoe',
            password: 'password123',
            fullName: 'John Doe',
            email: 'johndoe@example.com',
            dateOfBirth: '1985-05-15',
            gender: 'Male',
            conditions: 'Hypertension',
            status: 'patient',
            profilePicture: 'img/JohnDoePP.png',
            assessments: [
              {
                name: 'Cognitive Test A',
                dueDate: '2024-01-15',
                assignedOnDate: '2023-12-01',
                completed: false
              },
              {
                name: 'Memory Test B',
                dueDate: '2024-02-10',
                assignedOnDate: '2023-12-20',
                completed: true
              }
            ]
          }
        ], // Holds all patient records
        currentUser: null // Tracks the logged-in user
      };
    }

  render() {
    return (
      <div>
        <h1>Patient Database</h1>
        <ul>
          {this.state.patients.map((patient) => (
            <li key={patient.id}>
              <strong>{patient.fullName}</strong> ({patient.id})
              <ul>
                <li>Email: {patient.email}</li>
                <li>DOB: {patient.dateOfBirth}</li>
                <li>Gender: {patient.gender}</li>
                <li>Conditions: {patient.conditions}</li>
                <li>
                  Assessments:
                  <ul>
                    {patient.assessments.map((assessment, index) => (
                      <li key={index}>
                        {assessment.name} - Due: {assessment.dueDate} - Assigned: {assessment.assignedOnDate}
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Database;
