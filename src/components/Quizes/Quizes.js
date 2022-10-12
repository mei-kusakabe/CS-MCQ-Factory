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
        // icon = { faEye };
        console.log(correctAnswer);
        // i = 1;
        // // setSelectedIndex(i);
        // setSelectedIndex(0);

        // if (e === correctAnswer) {
        //     //return true;
        //     // console.log('you have clicked correct answer');
        //     toast.success('Correct answer !', {
        //         position: toast.POSITION.TOP_CENTER,
        //         autoClose: 1000
        //     });
        // }
        // else {
        //     // return false;
        //     toast.error('Wrong Answer !', {
        //         position: toast.POSITION.TOP_CENTER,
        //         autoClose: 1000
        //     });
        // }
    }


    // function handleClick(checkAnswer) {
    //     if (checkAnswer === true) {
    //         toast.success('You have clicked correct answer !', {
    //             position: toast.POSITION.TOP_RIGHT
    //         });
    //     }
    //     else {
    //         toast.error('Error Notification !', {
    //             position: toast.POSITION.TOP_CENTER
    //         });
    //     }
    // }
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
                            <h4 className='question-text'><span className='fw-bold'>Question:{i + 1}. </span>  {question.question.slice(3, -4)}</h4>
                            <FontAwesomeIcon onClick={(ans) => rightAnswer(question.correctAnswer)} icon={isActive ? faEyeSlash : faEye}></FontAwesomeIcon>
                            {/* <FontAwesomeIcon onClick={(ans) => rightAnswer(question.correctAnswer)} icon={faEyeSlash}></FontAwesomeIcon> */}
                            <div className='answer-section'>
                                {/* <FontAwesomeIcon onClick={(ans) => rightAnswer(question.correctAnswer)} icon={isActive ? faEyeSlash : faEye}></FontAwesomeIcon> */}

                                <div className="options">
                                    {
                                        question.options.map((option, i) => <div
                                            key={i}
                                            question={question}> <span className='fw-bold'> Option  {i + 1}{" : "}</span>
                                            <input type="radio" value={option}
                                                onClick={(e, ans) => checkAnswer(e.target.value, question.correctAnswer)} name="1" /> {option}<br></br>
                                            <ToastContainer />

                                        </div>)
                                    }

                                </div>
                                {/* <div><button onClick={() => handleClick(checkAnswer)} type="submit">Submit</button></div>
                                <ToastContainer /> */}
                            </div>

                        </div>)
                    }
                </div>
            </form >

        </div >
    );
};

export default Quizes;
