import React, { useState, useRef } from 'react';
import '../styles/series7-styles.css';

const SeriesSeven = () => {
    const [answers, setAnswers] = useState([]);
    const [currentNumber, setCurrentNumber] = useState(100);
    const [subtractionCount, setSubtractionCount] = useState(0);
    const [calculationCount, setCalculationCount] = useState(
        parseInt(localStorage.getItem('calculationCount')) || 5
    );
    const [score, setScore] = useState('');
    const [testStarted, setTestStarted] = useState(false);

    const answerInputRef = useRef();

    const startTest = () => {
        setAnswers([]);
        setCurrentNumber(100);
        setSubtractionCount(0);
        setCalculationCount(parseInt(localStorage.getItem('calculationCount')) || 5);
        setScore('');
        setTestStarted(true);
        answerInputRef.current.focus();
    };

    const submitAnswer = () => {
        const userAnswer = parseInt(answerInputRef.current.value, 10);
        if (isNaN(userAnswer)) return;

        const newAnswers = [...answers, userAnswer];
        setAnswers(newAnswers);

        answerInputRef.current.value = '';
        setSubtractionCount(subtractionCount + 1);

        if (subtractionCount + 1 === calculationCount) {
            endTest(newAnswers);
        } else {
            answerInputRef.current.focus();
        }
    };

    const endTest = (finalAnswers) => {
        setTestStarted(false);
        const score = calculateScore(finalAnswers);
        setScore(`${score} out of 3`);
    };

    const calculateScore = (finalAnswers) => {
        let correctSubtractions = 0;
        let previousNumber = 100;

        finalAnswers.forEach((answer) => {
            if (answer === previousNumber - 7) {
                correctSubtractions++;
            }
            previousNumber = answer;
        });

        if (correctSubtractions === 0) return 0;
        if (correctSubtractions === 1) return 1;
        if (correctSubtractions === 2 || correctSubtractions === 3) return 2;
        if (correctSubtractions >= calculationCount - 1) return 3;
    };

    return (
        <div className="container">
            <h1>Serial 7s Test</h1>
            <p id="instructions">
                Count by subtracting 7 from 100, and then keep subtracting 7 from your answer until
                you've made the required number of subtractions.
            </p>
            {testStarted ? (
                <div id="input-area">
                    <input type="text" ref={answerInputRef} placeholder="Enter your answer" />
                    <button onClick={submitAnswer}>Submit</button>
                </div>
            ) : (
                <button onClick={startTest}>Start Test</button>
            )}
            <div id="results">
                <p>Your answers: <span id="answers">{answers.join(' - ')}</span></p>
                <p>Score: <span id="score">{score}</span></p>
            </div>
            <a href="/index.html" className="button">Back to Home</a>
            <a href="Settings/settings7.html" className="button">Settings</a>
        </div>
    );
};

export default SeriesSeven;
