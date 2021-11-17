import React from "react";
import { AreaChart, Area, YAxis, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from "axios";

class AreaChartScreen extends React.Component {

    state = {
        fruits: []
    }
    componentDidMount() {
        axios.get("http://localhost:8081/api/fruits")
        .then(Response => {
            const fruits = Response.data;
            this.setState({ fruits });
        })
}

    render() {
        return (
            <AreaChart width={730} height={250} data={this.state.fruits}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="fruitName" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="price" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            </AreaChart>
        )
    };
}

export default AreaChartScreen;