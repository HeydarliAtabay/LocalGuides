import './App.css';
import Login from './Components/Login'
import React, { Component } from 'react';
import Sidebar from './Components/Sidebar'

class App extends Component {
  render() {
    return (
      <div>
        <Sidebar></Sidebar>
        <Login></Login>
      </div>
    );
  }
}

export default App;