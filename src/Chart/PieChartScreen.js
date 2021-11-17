// src/components/pie.rechart.js

import axios from "axios";
import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

class PieChartScreen extends React.Component {

    COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

    state = {
        results: []
    }
    componentDidMount() {
        axios.get("http://localhost:8081/api/fruits")
        .then(Response => {
            const results = Response.data;
            console.log(results);
            this.setState({ results });
        })
}

    CustomTooltip = ({ active, payload, label }) => {
        if (active) {
            return (
                <div className="custom-tooltip" style={{ backgroundColor: '#ffff', padding: '5px', border: '1px solid #cccc' }}>
                    <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
                </div>
            );
        }

        return null;
    };

    render() {
        return (<>
            <h5> Fruit price and name Pie Chart </h5>
            <PieChart width={900} height={350}>
                <Pie data={this.state.results} color="#000000" dataKey="price" nameKey="fruitName" cx="50%" cy="50%" outerRadius={120} fill="#8884d8" >
                    {
                        this.state.results.map((entry, index) => <Cell key={`cell-${index}`} fill={this.COLORS[index % this.COLORS.length]} />)
                    }
                </Pie>
                <Tooltip content={<this.CustomTooltip />} />
                <Legend />
            </PieChart></>
        )
    };
}

export default PieChartScreen;