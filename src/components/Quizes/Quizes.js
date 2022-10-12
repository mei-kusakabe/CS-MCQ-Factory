import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Quiz from '../Quiz/Quiz';
import './Quizes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


const Quizes = () => {
    const quizes = useLoaderData().data;
    console.log(quizes);
    const [isActive, setActive] = useState(true);


    // const [selectedIndex, setSelectedIndex] = useState(0)

    const toggleClass = () => {
        setActive(!isActive);
    };


    function checkAnswer(e, correctAnswer) {
        console.log(e, " ", correctAnswer);
        if (e === correctAnswer) {
            //return true;
            // console.log('you have clicked correct answer');
            toast.success('Correct answer !', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1000
            });
        }
        else {
            // return false;
            toast.error('Wrong Answer !', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1000
            });
        }
    }

    function rightAnswer(correctAnswer, i) {

        toast.success(correctAnswer, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1000
        });
        toggleClass();
        console.log(correctAnswer);

    }

    return (

        <div className='quiz-container m-5'>

            <div className='quiz-title'>
                <h2 className='fw-bold fs-1'>Quiz Subject: {quizes.name}</h2>
            </div>
            <form id="mainForm" name="mainForm">
                <div className='mt-3 ques-container d-flex flex-column border'>
                    {
                        quizes.questions.map((question, i) => <div

                            key={question.id}
                            question={question}>

                            <div className='single-question  mx-4 py-3 rounded'>
                                <div className='d-flex justify-content-center mb-3'>
                                    <h4 className='question-text fw-bold text-white'><span className='fw-bold'>Question:{i + 1}. </span>  {question.question.slice(3, -4)} </h4>
                                    <span className='px-5 fw-bold text-white'> See Ans: <FontAwesomeIcon onClick={(ans) => rightAnswer(question.correctAnswer)} icon={isActive ? faEyeSlash : faEye}></FontAwesomeIcon></span>

                                </div>

                                <div className='answer-section'>
                                    <div className="options">
                                        {
                                            question.options.map((option, i) => <div
                                                key={i}
                                                question={question}> <div className='bg-light fw-bold mx-5 m-2 rounded px-3 py-2'>
                                                    <span className='fw-bold'> Option  {i + 1}{" : "}</span>
                                                    <input type="radio" value={option}
                                                        onClick={(e, ans) => checkAnswer(e.target.value, question.correctAnswer)} name="1" /> {option}<br></br>
                                                    <ToastContainer />
                                                </div>

                                            </div>)
                                        }
                                    </div>
                                </div>
                            </div>



                        </div>)
                    }
                </div>
            </form >

        </div >
    );
};

export default Quizes;
