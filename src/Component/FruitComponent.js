import React from 'react';
import fruitService from '../services/fruitService';

class FruitComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            fruitInfo:[]
        }
    }
    componentDidMount(){
        fruitService.getfruit().then((Response) => {
            this.setState({fruitInfo: Response.data})
        });
    }
    render (){
        return (
            <div class="container">
                <h1 className="text-center">Fruit List</h1>
                <div className="card-body">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Fruit Name</th>
                            <th>Fruit Colour</th>
                            <th>Fruit Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.fruitInfo.map
                            (
                                fruitInfo =>
                                <tr key = {fruitInfo.id}>
                                    <td>{fruitInfo.id}</td>
                                    <td>{fruitInfo.fruitName}</td>
                                    <td>{fruitInfo.colour}</td>
                                    <td>{fruitInfo.price}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table> 
                </div>
            </div>
        )
    }
}

export default FruitComponent