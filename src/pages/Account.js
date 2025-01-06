import React from 'react';
import { useUser } from '../UserContext'; // Assuming you have set up UserContext
import '../styles/accountPage.css';

const Account = () => {
  const { currentUser } = useUser(); // Fetch the current user from the context

  if (!currentUser) {
    return <div>Please log in to view your account details.</div>;
  }

  return (
    <div className="account-dashboard">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
      </header>

      <section className="dashboard-metrics">
        <div className="metric-card">
          <h3>Full Name</h3>
          <p>{currentUser.fullName}</p>
        </div>

        <div className="metric-card">
          <h3>Email</h3>
          <p>{currentUser.email}</p>
        </div>

        <div className="metric-card">
          <h3>Conditions</h3>
          <p>{currentUser.conditions || 'None'}</p>
        </div>
      </section>

      <section className="overview">
        <div className="overview-item">
          <h3>Overview</h3>
          <p>Status: {currentUser.status}</p>
          <p>Gender: {currentUser.gender}</p>
        </div>

        <div className="overview-item">
          <h3>Assessments</h3>
          <ul>
            {currentUser.assessments.map((assessment, index) => (
              <li key={index}>
                {assessment.name} - Due: {assessment.dueDate} - Assigned: {assessment.assignedOnDate}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sales-distribution">
        <h3>Sales Distribution (Example Data)</h3>
        <div className="distribution-chart">
          {/* Placeholder for sales distribution chart */}
          <p>Placeholder for sales data</p>
        </div>
      </section>
    </div>
  );
};

export default Account;
