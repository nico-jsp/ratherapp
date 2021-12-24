
import React, { useState, useEffect, useRef } from "react";



const Question = ({ questions, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep }) => {


    const [selected, setSelected] = useState();
    const [selection, setSelection] = useState([]);
    const [but, setBut] = useState(false)
    const [valueCorrect, setValueCorrect] = useState(0)
    const [correct, setCorrect] = useState([])


    const [error, setError] = useState('');


    useEffect(() => {

        if (error) {
            setError('');
        }

        for (let index = 0; index < questions.options.length; index++) {

            if (questions.options[index].correct) {
                setCorrect(questions.options[index])
            }
        }


        let timer = setTimeout(endTimeHandler, (questions.lifetimeSeconds * 1000));
        let timer2 = setTimeout(nextClickHandler, ((questions.lifetimeSeconds * 1000) + 1000));

    }, [questions]);

    useEffect(() => {

        console.log(selection)
    }, []);


    const endTimeHandler = (e) => {
        console.log(selected + " end timer")

        if (selected === '') {
            // if (selected.length === 0) {
            console.log("despues de prender el error")
            console.log(selected)
            console.log(selection)
            return setError('Perdiste porque no respondiste a tiempo, podes seguir viendo el show');
        }

    };


    const nextClickHandler = () => {
        if (error) {
            setError('');
        }
        console.log(selection)
        console.log(selection.correct)
        if (selection.correct === true) {
            const newValueCorrect = valueCorrect + 1;
            setValueCorrect(newValueCorrect)
        }
        onAnswerUpdate(valueCorrect);
        setSelection('');
        setSelected('');

        if (activeQuestion < numberOfQuestions - 1) {
            onSetActiveQuestion(activeQuestion + 1);
        } else {
            onSetStep(3);
        }
    };

    const handleSelection = (choice) => {

        if (choice.correct === selection.correct && choice.correct === correct.correct) return "select";
        else if (choice.correct === selection.correct && choice.correct !== correct.correct) return "wrong";
        else if (choice) return

    };
    const handleCheck = (choice, i) => {
        setSelection(choice);
        setSelected(choice);
        setError('Ahora a esperar, en instantes se revela la respuesta correcta...');
        setBut(true);
        const value = choice.correct;
        const buttonPress = i;


    };

    const disableSelection = (i) => {
        return but;
    }



    return (

        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h2 className="mb-5">{questions.text}</h2>
                    <img className="image" src={questions.image} />
                    <div className="control">
                        {questions.options.map((choice, i) => (
                            <>
                                <button
                                    className={`singleOption  ${handleSelection(choice)}`}
                                    key={choice.text}
                                    onClick={() => handleCheck(choice, i)}
                                    disabled={selected}
                                >
                                    {choice.text}
                                </button>
                            </>
                        ))}

                    </div>
                    {error && <div className="has-text-danger">{error}</div>}
                </div>
            </div>
        </div >
    );



}

export default Question