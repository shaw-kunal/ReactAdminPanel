import React from 'react'
import './chart.scss'
import { LineChart, Line, XAxis,  CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Chart = ({ data, title , grid,dataKey }) => {


    return (
        <div className='chart'>
            <h3 className="chartTitle">  {title}</h3>

            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd" />
                    <Line type='monotone' dataKey={dataKey} stroke="#5550bd"/>
                    <Tooltip />
                    {grid && <CartesianGrid stoke="#da5151" strokeDasharray='5 5' />
                    }
                <Legend/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart