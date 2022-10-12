import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Home.css';
const Home = () => {


    const topics = useLoaderData().data;
    console.log(topics);

    return (
        <div>
            <section className='header-section p-5 text-center bg-image'>
                <div className="mask">
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="text-black">
                            <h1 className="mb-5 text-blue fw-bold">CS MCQ Factory</h1>
                            <h4 className="mb-3 fst-italic">My favorite thing in the world is a quiz show, ‘University Challenge,’<br></br> so you can see what kind of sad person I am.” ~ Lynne Truss</h4>
                            <a className="mb-3 btn btn-outline-light btn-lg fw-bold" href="/quizes" role="button"
                            >Take quizes</a
                            >
                        </div>
                    </div>
                </div>
            </section>

            <div className='topic-container m-5'>
                {
                    topics.map(topic => <Topic
                        key={topic.id}
                        topic={topic}></Topic>)
                }
            </div>

        </div>
    );
};

export default Home;

