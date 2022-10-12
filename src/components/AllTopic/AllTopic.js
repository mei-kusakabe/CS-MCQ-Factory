import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import '../Home/Home.css';
import '../Topic/Topic.css';



const AllTopic = () => {
    const topics = useLoaderData().data;
    console.log(topics);

    return (

        <div className='topic-container m-5'>
            {
                topics.map(topic => <Topic
                    key={topic.id}
                    topic={topic}></Topic>)
            }

        </div>
    );
};

export default AllTopic;