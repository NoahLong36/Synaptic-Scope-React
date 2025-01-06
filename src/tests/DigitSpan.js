import React, { useState, useEffect, useRef } from 'react';
import '../styles/digitSpan-styles.css';

const DigitSpan = () => {
    const [sequence, setSequence] = useState([]);
    const [userSequence, setUserSequence] = useState('');
    const [round, setRound] = useState(0);
    const [score, setScore] = useState(0);
    const [displayMessage, setDisplayMessage] = useState('');
    const [inputEnabled, setInputEnabled] = useState(false);

    const numberDisplayRef = useRef();

    useEffect(() => {
        if (round > 0) startRound();
    }, [round]);

    const startRound = () => {
        setUserSequence('');
        setInputEnabled(false);
        const newSequence = Array.from({ length: 5 }, () => Math.floor(Math.random() * 10));
        setSequence(newSequence);
        displaySequence(newSequence);
    };

    const displaySequence = (seq, index = 0) => {
        if (index < seq.length) {
            numberDisplayRef.current.textContent = seq[index];
            setTimeout(() => {
                numberDisplayRef.current.textContent = '';
                setTimeout(() => displaySequence(seq, index + 1), 500); // Adjust timing here
            }, 1000);
        } else {
            setDisplayMessage('Your turn!');
            setInputEnabled(true);
        }
    };

    const handleUserInput = (e) => {
        setUserSequence(e.target.value);
    };

    const checkSequence = () => {
        setInputEnabled(false);
        const isCorrect = sequence.join('') === userSequence;
        setDisplayMessage(isCorrect ? 'Correct! Well done!' : `Incorrect. The correct sequence was ${sequence.join('')}.`);
        setScore((prev) => prev + (isCorrect ? 0 : 1));
        if (round < 3) setTimeout(() => setRound(round + 1), 2000);
    };

    return (
        <div className="game-container">
            <div className="main-game">
                <h1>Number Sequence Game</h1>
                <div id="round-display">Round: {round} / 5</div>
                <div id="game-area">
                    <div id="number-display" ref={numberDisplayRef}></div>
                    <input
                        type="text"
                        id="user-input"
                        value={userSequence}
                        onChange={handleUserInput}
                        placeholder="Enter the sequence"
                        disabled={!inputEnabled}
                    />
                    <button id="start-button" onClick={() => setRound(1)} disabled={round > 0}>
                        Start Game
                    </button>
                    <button id="submit-button" onClick={checkSequence} disabled={!inputEnabled}>
                        Submit
                    </button>
                </div>
                <div id="result">{displayMessage}</div>
            </div>
            <div className="score-box">
                <h2>Incorrect Numbers</h2>
                <div id="score">{score}</div>
            </div>
        </div>
    );
};

export default DigitSpan;
