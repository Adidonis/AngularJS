import React, { Component } from 'react'
import './App.css';
import FruitComponent from './Component/FruitComponent';
import HomeScreen from './LoginPage/HomeScreen';
// import { Router } from 'react-router-dom';
// import Routes from './routes/route';
// // import history from './services/history';
import LoginPage from './LoginPage/LoginPage';
class App extends Component{

  dataFunction()
  {
    return 10;
  }
  render(){
  return (
    <div className="App">
      <LoginPage/>
      <FruitComponent/> 
      <HomeScreen/>
    </div>
  );
}
} 
export default App;
