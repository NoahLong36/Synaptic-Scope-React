
import '../styles/verbalMemory-styles.css'; // Assuming the provided CSS file
import React, { useState } from 'react';


const VerbalMemoryTest = () => {
    const [gameStarted, setGameStarted] = useState(false);
    const [round, setRound] = useState(1);
    const [gridSize, setGridSize] = useState(4);
    const [correctWords, setCorrectWords] = useState([]);
    const [allWords, setAllWords] = useState([]);
    const [selectedWords, setSelectedWords] = useState([]);
    const [isMemorizationPhase, setIsMemorizationPhase] = useState(false);
    const [isSubmissionPhase, setIsSubmissionPhase] = useState(false);
    const [score, setScore] = useState(0);
    const [targetCategory, setTargetCategory] = useState('');
    const categories = {
        Animals: ['bear', 'wolf', 'lion', 'tiger', 'frog', 'duck', 'goat', 'pig', 'cow', 'horse'],
        Colors: ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'black', 'white', 'brown'],
        Countries: ['USA', 'Canada', 'China', 'India', 'Germany', 'France', 'Italy', 'Brazil', 'Russia', 'Japan'],
        Sports: ['soccer', 'tennis', 'cricket', 'basketball', 'golf', 'hockey', 'rugby', 'volleyball', 'swimming', 'boxing'],
        Fruits: ['apple', 'banana', 'grape', 'mango', 'peach', 'cherry', 'kiwi', 'pear', 'plum', 'orange'],
        Vehicles: ['car', 'truck', 'bike', 'plane', 'boat', 'bus', 'train', 'scooter', 'ship', 'helicopter'],
        Subjects: ['math', 'science', 'history', 'geography', 'art', 'music', 'english', 'coding', 'physics', 'chemistry'],
        Foods: ['pizza', 'burger', 'salad', 'steak', 'pasta', 'noodle', 'soup', 'taco', 'rice', 'bread'],
        Jobs: ['doctor', 'engineer', 'teacher', 'lawyer', 'nurse', 'chef', 'pilot', 'farmer', 'artist', 'clerk'],
        Tools: ['hammer', 'wrench', 'saw', 'drill', 'level', 'screwdriver', 'chisel', 'plow', 'shovel', 'hoe'],
    };

    const generateGrid = (size, correctCount, category) => {
        const correct = categories[category].sort(() => Math.random() - 0.5).slice(0, correctCount);
        const otherCategories = Object.keys(categories).filter(cat => cat !== category);
        const randomWords = [];
        while (randomWords.length < size * size - correctCount) {
            const randomCategory = otherCategories[Math.floor(Math.random() * otherCategories.length)];
            const randomWord = categories[randomCategory][Math.floor(Math.random() * 10)];
            if (!correct.includes(randomWord) && !randomWords.includes(randomWord)) {
                randomWords.push(randomWord);
            }
        }
        const gridWords = [...correct, ...randomWords].sort(() => Math.random() - 0.5);
        setCorrectWords(correct);
        setAllWords(gridWords);
    };

    const startGame = () => {
        setGameStarted(true);
        startRound();
    };

    const startRound = () => {
        const size = round === 1 ? 4 : 6;
        const correctCount = round === 1 ? 4 : 6;
        const categoryKeys = Object.keys(categories);
        const newTargetCategory = categoryKeys[Math.floor(Math.random() * categoryKeys.length)];
        setTargetCategory(newTargetCategory);
        setGridSize(size);
        generateGrid(size, correctCount, newTargetCategory);
        setSelectedWords([]);
        setIsMemorizationPhase(true);
        setIsSubmissionPhase(false);
        setTimeout(() => setIsMemorizationPhase(false), 5000);
    };

    const toggleWordSelection = word => {
        if (!isMemorizationPhase && !isSubmissionPhase) {
            setSelectedWords(prev =>
                prev.includes(word) ? prev.filter(w => w !== word) : [...prev, word]
            );
        }
    };

    const submitAnswers = () => {
        const correctSelections = selectedWords.filter(word => correctWords.includes(word));
        const incorrectSelections = selectedWords.filter(word => !correctWords.includes(word));
        const correctCount = correctSelections.length;
        const incorrectCount = incorrectSelections.length;
        setScore(prevScore => prevScore + correctCount - incorrectCount);
        setIsSubmissionPhase(true);
        setTimeout(() => {
            if (round === 1) {
                setRound(2);
                startRound();
            } else {
                alert(`Game Over! Final Score: ${score + correctCount - incorrectCount}`);
                setGameStarted(false);
                setRound(1);
                setScore(0);
            }
        }, 3000);
    };

    return (
        <div className="game-container">
            {!gameStarted && (
                <button onClick={startGame} className="start-button">
                    Start Game
                </button>
            )}
            {gameStarted && (
                <div className="main-game">
                    <h1>Verbal Memory Test</h1>
                    <div id="round-display">Round: {round} / 2</div>
                    <div>Target Category: {targetCategory}</div>
                    <div id="game-area">
                        <div
                            id="grid"
                            style={{
                                gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
                                gridTemplateRows: `repeat(${gridSize}, 1fr)`,
                            }}
                        >
                            {allWords.map((word, index) => (
                                <button
                                    key={index}
                                    className={`word ${
                                        isSubmissionPhase
                                            ? correctWords.includes(word)
                                                ? 'correct'
                                                : selectedWords.includes(word)
                                                ? 'incorrect'
                                                : ''
                                            : selectedWords.includes(word)
                                            ? 'clicked'
                                            : ''
                                    }`}
                                    onClick={() => toggleWordSelection(word)}
                                    disabled={isSubmissionPhase || isMemorizationPhase}
                                >
                                    {word}
                                </button>
                            ))}
                        </div>
                        <button
                            onClick={submitAnswers}
                            disabled={isMemorizationPhase || isSubmissionPhase}
                        >
                            Submit
                        </button>
                    </div>
                    <div id="result">
                        {isMemorizationPhase
                            ? 'Memorize these words...'
                            : isSubmissionPhase
                            ? 'Check the grid for results!'
                            : 'Select the words you remember!'}
                    </div>
                    <div className="score-box">
                        <h2>Score</h2>
                        <div id="score">{score}</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VerbalMemoryTest;
