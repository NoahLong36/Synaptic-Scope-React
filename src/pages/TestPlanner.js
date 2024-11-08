import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import DigitSpan from '../tests/DigitSpan';
import '../styles/testPlanner-styles.css';

const TestPlanner = () => {
    const navigate = useNavigate();

    const tests = [
        { id: 'digit-span', title: 'Digit Span', component: <DigitSpan /> },
        // Add other tests here if needed
    ];

    return (
        <div className="test-planner">
            <h1>Neurocognitive Tests</h1>
            <div className="button-grid">
                {tests.map((test) => (
                    <button 
                        key={test.id} 
                        className="test-button" 
                        onClick={() => navigate(`/test/${test.id}`)}
                    >
                        {test.title}
                    </button>
                ))}
            </div>

            <Routes>
                {tests.map((test) => (
                    <Route key={test.id} path={`/test/${test.id}`} element={test.component} />
                ))}
            </Routes>
        </div>
    );
};

export default TestPlanner;
