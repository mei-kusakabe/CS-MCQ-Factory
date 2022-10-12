import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Line, LineChart, XAxis, YAxis, Tooltip, BarChart, Bar } from 'recharts';

const Statistics = () => {

    const quizTopics = useLoaderData().data;
    console.log(quizTopics);
    return (
        <div>
            <h2 className='fw-bold'>Statistics page of Topics</h2>

            <div className='m-5'>
                < BarChart width={600} height={400} data={quizTopics}>
                    <Line type="monotone" className='p-5 m-5' dataKey="total" stroke="#82ca9d" tick={quizTopics} />
                    <XAxis dataKey="name" className='p-5 m-5' />
                    <YAxis dataKey="total" className='p-5 m-5' />&nbsp;
                    <Bar dataKey="total" className='p-5 m-5' barSize={30} fill="#8884d8"
                        label={quizTopics} />
                    <Tooltip></Tooltip>
                </BarChart>
            </div>

        </div >
    );
};

export default Statistics;
