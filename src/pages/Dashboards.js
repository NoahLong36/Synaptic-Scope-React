import React from 'react';
import '../styles/dashboard-styles.css';


const Dashboard = () => {

    return (
        <div className='main-container'>
            <section class="section">
                <div class="box">Box 1A</div>
                <div class="box">Box 1B</div>
            </section>
            <section class="section">
                <div class="box">Box 2A</div>
                <div class="box">Box 2B</div>
                <div class="box">Box 2C</div>
            </section>
            <section class="section">
                <div class="box">Box 3A</div>
                <div class="box">Box 3B</div>
            </section>
        </div>
    );
};

export default Dashboard;
