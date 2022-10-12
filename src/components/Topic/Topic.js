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
                <button type="button" className="btn btn-info px-5 py-2 fw-bold text-white"><Link to={`/quiz/${id}`}>Test yourself</Link></button>

                {/* <button class="button"> <Link to={`/quiz/${id}`}>Test yourself</Link></button> */}

            </div>

        </div >
    );

};

export default Topic;