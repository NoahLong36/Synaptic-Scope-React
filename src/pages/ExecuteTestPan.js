import React, { useState } from 'react';
import DigitSpan from '../tests/DigitSpan';
import LanguageMemory from '../tests/LanguageMemory';
import SeriesSeven from '../tests/SeriesSeven';
import VerbalMemory from '../tests/VerbalMemory';

const COMPONENT_MAP = {
    DigitSpan: DigitSpan,
    SeriesSeven: SeriesSeven,
    LanguageMemory: LanguageMemory,
    VerbalMemory: VerbalMemory,
};

const ExecuteTestPlan = () => {
    const testPlan = JSON.parse(localStorage.getItem('testPlan')) || [];
    const [currentTestIndex, setCurrentTestIndex] = useState(0);
    const [isTestComplete, setIsTestComplete] = useState(false);
    const [results, setResults] = useState([]);

    const handleTestComplete = (result) => {
        setResults([...results, result]); // Optional: Store results
        setIsTestComplete(true);
    };

    const handleNextTest = () => {
        if (currentTestIndex < testPlan.length - 1) {
            setCurrentTestIndex(currentTestIndex + 1);
            setIsTestComplete(false);
        } else {
            alert('Test Plan Complete');
            console.log('Results:', results);
        }
    };

    const CurrentTest = COMPONENT_MAP[testPlan[currentTestIndex]?.id];

    if (!CurrentTest) {
        return <div>No test plan found. Please go back and create a test plan.</div>;
    }

    return (
        <div style={{ padding: '20px' }}>
            <h1>Executing Test Plan</h1>
            <p>Currently Running: {testPlan[currentTestIndex]?.name}</p>
            <CurrentTest onComplete={handleTestComplete} />
            {isTestComplete && (
                <button
                    onClick={handleNextTest}
                    style={{
                        marginTop: '20px',
                        padding: '10px 20px',
                        backgroundColor: '#28a745',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    Next Test
                </button>
            )}
        </div>
    );
};

export default ExecuteTestPlan;