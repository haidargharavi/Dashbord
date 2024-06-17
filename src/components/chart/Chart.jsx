import React from 'react'
import './chart.css'
import { ResponsiveContainer, Line, LineChart, CartesianGrid, Tooltip } from 'recharts'
import { XAxis } from 'recharts'

export default function Chart(title, data, datakey, grid) {
    return (
        <div className='chart'>
            <h3 className='chartTitle'>{title.title}</h3>
            <ResponsiveContainer width="100%" aspect={3}>
                <LineChart data={title.data}>
                    <XAxis dataKey="name" stroke='#5550db' />
                    <Line type="monotone" dataKey={title.datakey} stroke='#5550db' />
                    <Tooltip />
                    {title.grid && <CartesianGrid stroke='#c0dfdf' strokeDasharray="10" />}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

