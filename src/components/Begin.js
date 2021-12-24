import React from 'react'
// import { Trivia } from './data/Trivia';
// import Trivia from "./data/Trivia.js"

const Begin = ({ onQuizBegin, title, img }) => {



    return (
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h1>{title}</h1>
                    <img className="image" src={img} />
                    <p>Good luck!</p>
                    <button className="button is-info is-medium" onClick={onQuizBegin}>Start</button>
                </div>
            </div>
        </div>
    )
};

export default Begin;
