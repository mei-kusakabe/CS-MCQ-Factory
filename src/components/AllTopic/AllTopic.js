import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
// import '../Home/Home.css';
import '../Topic/Topic.css';



const AllTopic = () => {
    const topics = useLoaderData().data;
    console.log(topics);

    return (
        <div>
            <h2 className='fw-bold mt-5'>All Quiz Categories</h2>
            <div className='topic-all m-5 border-0'>

                {
                    topics.map(topic => <Topic
                        key={topic.id}
                        topic={topic}></Topic>)
                }

            </div>
        </div>

    );
};

export default AllTopic;