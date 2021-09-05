import { Tooltip } from '@material-ui/core';
import React from 'react'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import './Chart.css'
function Chart() {
    const data = [
        {
          name: 'January',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'February',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'March',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'April',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'May',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'June',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'July',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
    return (
        <div className="chart">
          <h3 className="chartTiltle">Sales Analysis</h3>
          <ResponsiveContainer width="100%" aspect={4/1}>
              <LineChart data={data}>
                  <XAxis dataKey="name" stroke="#5550bd"></XAxis>
                 <Line type="monotone" dataKey="uv"/>
                 <Tooltip/>
                 <CartesianGrid stroke="#e0dfdf" strokeDasharray="3 3"/>
              </LineChart>
          </ResponsiveContainer>
        </div>
    )
}

export default Chart
