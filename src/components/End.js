import React, { useEffect, useState } from 'react';

// import { formatTime } from '../utils';

const End = ({ results, data, onReset, onAnswersCheck, time }) => {
    const [correctAnswers, setCorrectAnswers] = useState(0);


    return (
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h3>Your results</h3>
                    {results}
                </div>
            </div>
        </div>
    );
}

export default End;