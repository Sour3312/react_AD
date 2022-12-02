import './chart.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = ({ title, data, datakey, grid }) => {
    return (
        <div className='chart'>
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width='100%' aspect={4 / 1} >
                <LineChart
                    width="100%"
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <XAxis dataKey="name" stroke="#5550bd" />
                    <YAxis />
                    <Legend />

                    <Line type="monotone" dataKey={datakey} stroke="#8884d8" />
                    <Tooltip />

                    {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}

                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart
