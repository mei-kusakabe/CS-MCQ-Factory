import React from 'react';
import '../Home/Home.css';
import './Topic.css';


const Topic = ({ topic }) => {
    const { name, id, logo, total } = topic;
    return (

        <div className='topic-section'>
            <div className='topic'>
                <ul>
                    <li> <img src={logo} ></img></li>
                    <li>quiz topic: {name}</li>
                    <li> Total Question: {total} </li>
                    <li><button>Test yourself</button></li>
                </ul>

            </div>

        </div>
    );

};

export default Topic;