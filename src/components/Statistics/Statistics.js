import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Line, XAxis, YAxis, Tooltip, BarChart, Bar, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';

const Statistics = () => {

    const quizTopics = useLoaderData().data;
    console.log(quizTopics);
    return (


        <div className='bar2 m-5 position-absolute top-50 start-50 translate-middle'>

            <ResponsiveContainer width={500} height={300}>
                <BarChart
                    width={500}
                    height={300}
                    data={quizTopics}
                >
                    <Line type="monotone" className='p-5 m-5' dataKey="total" stroke="#82ca9d" tick={quizTopics} />
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {/* <Bar dataKey="name" stackId="a" fill="#8884d8" /> */}
                    <Bar dataKey="total" stackId="a" fill="#82ca9d" label={quizTopics} />
                    <Tooltip></Tooltip>
                </BarChart>
            </ResponsiveContainer>
        </div>

    );
};

export default Statistics;
