import React, { useState, useEffect } from "react";
import "../styles/languageMemory-styles.css";

const subjects = {
    Animals: ["Cat", "Dog", "Elephant", "Lion", "Tiger", "Bear", "Giraffe", "Monkey", "Zebra", "Kangaroo"],
    Colors: ["Red", "Blue", "Green", "Yellow", "Purple", "Orange", "Pink", "Brown", "Black", "White"],
    Fruits: ["Apple", "Banana", "Orange", "Grape", "Strawberry", "Pineapple", "Mango", "Kiwi", "Peach", "Cherry"],
    Countries: ["USA", "Canada", "Brazil", "France", "Germany", "Japan", "Australia", "India", "China", "Russia"],
    Sports: ["Football", "Basketball", "Tennis", "Soccer", "Golf", "Swimming", "Volleyball", "Baseball", "Cricket", "Hockey"],
};

const LanguageMemoryTest = () => {
    const [gamePhase, setGamePhase] = useState("start"); // "start", "memory", "gameplay", "results"
    const [currentWords, setCurrentWords] = useState([]);
    const [randomWords, setRandomWords] = useState([]);
    const [selectedWords, setSelectedWords] = useState([]);
    const [highlightWords, setHighlightWords] = useState({});
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        if (gamePhase === "memory" && timer > 0) {
            const countdown = setTimeout(() => setTimer(timer - 1), 1000);
            return () => clearTimeout(countdown);
        }
        if (gamePhase === "memory" && timer === 0) {
            transitionToGameplay();
        }

        if (gamePhase === "gameplay" && timer > 0) {
            const countdown = setTimeout(() => setTimer(timer - 1), 1000);
            return () => clearTimeout(countdown);
        }
        if (gamePhase === "gameplay" && timer === 0) {
            handleSubmit();
        }
    }, [timer, gamePhase]);

    const startGame = () => {
        const subjectKeys = Object.keys(subjects);
        const randomSubject = subjectKeys[Math.floor(Math.random() * subjectKeys.length)];
        const words = subjects[randomSubject];
        const chosenWords = words.slice(0, 4);
        setCurrentWords(chosenWords);
        setGamePhase("memory");
        setTimer(5);
    };

    const transitionToGameplay = () => {
        const fillerWords = getRandomWords(32, currentWords);
        const shuffledWords = shuffleArray([...currentWords, ...fillerWords]);
        setRandomWords(shuffledWords);
        setSelectedWords([]);
        setHighlightWords({});
        setGamePhase("gameplay");
        setTimer(10);
    };

    const handleTileClick = (word) => {
        setSelectedWords((prevSelected) =>
            prevSelected.includes(word)
                ? prevSelected.filter((w) => w !== word)
                : [...prevSelected, word]
        );
    };

    const handleSubmit = () => {
        const highlights = {};
        let correctCount = 0;

        randomWords.forEach((word) => {
            if (currentWords.includes(word)) {
                highlights[word] = selectedWords.includes(word) ? "correct" : "missed";
                if (selectedWords.includes(word)) correctCount++;
            } else if (selectedWords.includes(word)) {
                highlights[word] = "incorrect";
            }
        });
        
        setGamePhase('results');
        setHighlightWords(highlights);
        setScore(correctCount);
        setGamePhase("results");
    };

    const getRandomWords = (count, exclude = []) => {
        const allWords = Object.values(subjects).flat();
        const randomWords = [];
        while (randomWords.length < count) {
            const word = allWords[Math.floor(Math.random() * allWords.length)];
            if (!exclude.includes(word) && !randomWords.includes(word)) {
                randomWords.push(word);
            }
        }
        return randomWords;
    };

    const shuffleArray = (array) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    return (
        <div className="game-container">
            <div className="main-game">
                <h1>Language Memory Test</h1>
                {gamePhase === "start" && (
                    <button className="start-button" onClick={startGame}>
                        Start Game
                    </button>
                )}
                {gamePhase === "memory" && (
                    <div>
                        <h2>Memorize these words!</h2>
                        <div
                            id="grid"
                            style={{
                                gridTemplateColumns: `repeat(${gamePhase === "memory" ? 2 : 6}, 1fr)`,
                            }}
                        >
                            {currentWords.map((word, index) => (
                                <div key={index} className="tile">
                                    {word}
                                </div>
                            ))}
                        </div>
                        <p>Time remaining: {timer} seconds</p>
                    </div>
                )}
                {gamePhase === "gameplay" && (
                    <div>
                        <h2>Find the original words!</h2>
                        <div
                            id="grid"
                            style={{ gridTemplateColumns: "repeat(6, 1fr)" }}
                        >
                            {randomWords.map((word, index) => (
                                <button
                                    key={index}
                                    className={`tile ${
                                        highlightWords[word]
                                            ? highlightWords[word] === "correct"
                                                ? "correct"
                                                : highlightWords[word] === "incorrect"
                                                ? "incorrect"
                                                : "missed"
                                            : selectedWords.includes(word)
                                            ? "selected"
                                            : ""
                                    }`}
                                    onClick={() => handleTileClick(word)}
                                    disabled={gamePhase === "results"}
                                >
                                    {word}
                                </button>
                            ))}
                        </div>
                        <p>Time remaining: {timer} seconds</p>
                    </div>
                )}
                {gamePhase === "results" && (
                    <div>
                        <h2>Results</h2>
                        <p>
                            Your Score: {score} / {currentWords.length}
                        </p>
                        <button onClick={startGame}>Play Again</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LanguageMemoryTest;
