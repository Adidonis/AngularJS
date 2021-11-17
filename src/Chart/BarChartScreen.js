import React from "react";
import { BarChart, Bar, YAxis, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from "axios";

class BarChartScreen extends React.Component {

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
        return (<>
                <h3>FruitInfo</h3>
                <BarChart width={730} height={250} data={this.state.fruits}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="fruitName" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="price" fill='rgba(255, 159, 64, 0.2)' />
            </BarChart></>
        )
    };
}

export default BarChartScreen;







// import React, {useState, useEffect} from 'react';

// import {Bar} from 'react-chartjs-2';
// import {getdata} from '../services/fruitService';


// const BarChartScreen = () => {
//     const [lablesData, setLabelsData] = useState([]);
//     const [fruitName, setfruitName] = useState([]);
//     const data = (canvas) => {
//         const ctx = canvas.getContext("2d");
//         const gradient1 = ctx.createLinearGradient(0, 90, 100, 0);
        
//         gradient1.addColorStop(0, '#B7F8DB');
//         gradient1.addColorStop(0.5, '#50A7C2');
//         gradient1.addColorStop(1, '#B7F8DB');

//         return {
//             labels: lablesData,
//             datasets: [
//                 {
//                     barPercentage: 0.5,
//                     barThickness: 10,
//                     maxBarThickness: 100,
//                     minBarLength: 2,
//                     label: 'FruitName',
//                     data: fruitName,
//                     backgroundColor: gradient1,
//                     borderWidth: 1
//                 },
//             ]
//         }
//     }
//     const options = {
//         responsive: true,
//         tooltips: {
//             mode: 'index',
//             intersect: false,
//         },
//         hover: {
//             mode: 'nearest',
//             intersect: true
//         },
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         },
//         legend: {
//             display: true,
//             position: 'bottom',
//             labels: {
//                 fontColor: 'rgba(242, 38, 19, 1)'
//             }
//         },
//     }
//     const getChartData = async () => {
//         try{
//             let labelsArray = [];
//             let fruitNameArr = [];
//             const data = await getdata();
//             data.forEach(element => {
//                 labelsArray.push(element.lablesData);
//                 fruitNameArr.push(element.fruitName);
//             });
//             setLabelsData(labelsArray);
//             setfruitName(fruitNameArr);
//         }catch(error) {
//             console.log(error);
//         }
//     }
//     useEffect(() => {
//         getChartData();
//     }, []);
//     return (
//         <Bar data={data} options={options}/>
//     );
// }

// export default BarChartScreen;