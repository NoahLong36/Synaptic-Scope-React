// src/components/TestCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/testCard-styles.css';

const TestCard = ({ name, path }) => {
    return (
        <Link to={path} className="test-card">
            <div className="test-card-content">
                <h3>{name}</h3>
            </div>
        </Link>
    );
};

export default TestCard;
