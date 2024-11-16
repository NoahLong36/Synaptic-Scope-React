import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/landingPage-styles.css';

const testMapping = {
  1: 'digit-span',
  2: 'language-memory',
  3: 'series-seven',
  4: 'verbal-memory',
};

const reverseMapping = {
  'digit-span': 1,
  'language-memory': 2,
  'series-seven': 3,
  'verbal-memory': 4,
};

const LandingPage = () => {
  const { testPlanId } = useParams();
  const [selectedTests, setSelectedTests] = useState({
    'digit-span': false,
    'language-memory': false,
    'series-seven': false,
    'verbal-memory': false,
  });
  const [entryBox, setEntryBox] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (testPlanId) {
      const testIds = testPlanId.split('');
      const newSelectedTests = Object.keys(testMapping).reduce((acc, id) => {
        const testKey = testMapping[id];
        acc[testKey] = testIds.includes(id);
        return acc;
      }, {});
      setSelectedTests(newSelectedTests);
      setEntryBox(testPlanId);
    }
  }, [testPlanId]);

  const handleCheckboxChange = (testKey) => {
    setSelectedTests((prev) => ({
      ...prev,
      [testKey]: !prev[testKey],
    }));
  };

  const generateTestPlanId = () => {
    return Object.keys(selectedTests)
      .filter((key) => selectedTests[key])
      .map((key) => reverseMapping[key])
      .join('');
  };

  const startTests = () => {
    const testsToRun = Object.keys(selectedTests).filter((key) => selectedTests[key]);
    navigate('/testPlanner', { state: { testsToRun } });
  };

  return (
    <div className="landing-page-container">
      <h1>Welcome to the Neurocognitive Tests</h1>
      <p>Select the tests or enter a Test Plan ID to proceed.</p>
      <div className="test-plan-id-section">
        <input
          type="text"
          placeholder="Enter Test Plan ID (e.g., 123)"
          value={entryBox}
          onChange={(e) => setEntryBox(e.target.value)}
        />
        <button
          onClick={() => {
            const testIds = entryBox.split('');
            const newSelectedTests = Object.keys(testMapping).reduce((acc, id) => {
              const testKey = testMapping[id];
              acc[testKey] = testIds.includes(id);
              return acc;
            }, {});
            setSelectedTests(newSelectedTests);
          }}
        >
          Load Test Plan
        </button>
      </div>
      <div className="test-info">
        {Object.entries(testMapping).map(([id, testKey]) => (
          <div key={testKey} className="test-card">
            <h2>{testKey.replace('-', ' ').toUpperCase()}</h2>
            <label>
              <input
                type="checkbox"
                checked={selectedTests[testKey]}
                onChange={() => handleCheckboxChange(testKey)}
              />
              Include in Sequence
            </label>
          </div>
        ))}
      </div>
      <button className="start-button" onClick={startTests}>
        Start
      </button>
    </div>
  );
};

export default LandingPage;
