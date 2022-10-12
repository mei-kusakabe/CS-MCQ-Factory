import React from 'react';
import { Link } from 'react-router-dom';
import '../Home/Home.css';
import './Topic.css';


const Topic = ({ topic }) => {
    const { name, id, logo, total } = topic;
    return (

        <div className='topic-section'>
            <div className='topic px-0 border-1'>
                <img className="mt-5" src={logo} ></img>
                <h4>Topic: {name} </h4>
                <h4> Total Question: {total}</h4>
                <button> <Link to={`/quiz/${id}`}>Test yourself</Link></button>

            </div>

        </div>
    );

};

export default Topic;