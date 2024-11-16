import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DigitSpan from './DigitSpan';
import LanguageMemory from './LanguageMemory';
import SeriesSeven from './SeriesSeven';
import VerbalMemory from './VerbalMemory';

const testComponents = {
  'digit-span': <DigitSpan />,
  'language-memory': <LanguageMemory />,
  'series-seven': <SeriesSeven />,
  'verbal-memory': <VerbalMemory />,
};

const TestPlanner = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedTests = location.state?.testsToRun || [];
  const [currentTestIndex, setCurrentTestIndex] = useState(0);

  const handleNext = () => {
    if (currentTestIndex < selectedTests.length - 1) {
      setCurrentTestIndex(currentTestIndex + 1);
    } else {
      navigate('/landing');
    }
  };

  return (
    <div className="test-sequence-container">
      {currentTestIndex < selectedTests.length ? (
        <>
          <div className="test-component">
            {testComponents[selectedTests[currentTestIndex]]}
          </div>
          <button className="next-button" onClick={handleNext}>
            {currentTestIndex < selectedTests.length - 1 ? 'Next' : 'Finish'}
          </button>
        </>
      ) : (
        <h1>Tests Completed!</h1>
      )}
    </div>
  );
};

export default TestPlanner;
