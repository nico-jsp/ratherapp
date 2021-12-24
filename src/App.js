import React, { useState } from 'react';
import './App.css';
import Begin from './components/Begin';
import { Trivia } from "./components/data/Trivia"
// import quizData from "./components/data/questions.json"
import Question from './components/Question';
import End from './components/End'

function App() {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState(0)

  const quizBeginHandler = () => {
    setStep(2);
  }


  return (
    <div className="App">
      {/* <h1>Hello Quiz</h1> */}
      {step === 1 && <Begin onQuizBegin={quizBeginHandler} title={Trivia.title} img={Trivia.image} />}
      {step === 2 && <Question
        questions={Trivia.questions[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={Trivia.questions.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
      />}
      {step === 3 && <End
        results={answers}
      />}

    </div >
  );
}

export default App;
