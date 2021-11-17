// import React  from 'react';
// import { render, screen } from '@testing-library/react';
// import { FruitComponent } from '../Component/FruitComponent'



// test('renders Table Component', () => {
//   render(<FruitComponent />);
//   const linkElement = screen.getByText('Fruit List');
//   expect(linkElement).toBeInTheDocument();
// });

// class fruitComp extends Component {
//     state = {
//       fruitInfo: []
//     }
//     async componentDidMount() {
//       try {
//             const tasksResponse = await axios.get("http://localhost:8081/api/fruits");
//             this.setState({
//                 tasks: tasksResponse.data
//             });
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     render() {
//       return (
//         <div>
//           <h1>FruitComponent</h1>
//           <ul>
//             {
//               this.state.tasks.map(fruitInfo =>
//                 <tasks key={fruitInfo.id} id={fruitInfo.id} name={fruitInfo.name}/>
//               )
//             }
//           </ul>
//         </div>
//       )
//     }
//   }
   
//   export default fruitComp;