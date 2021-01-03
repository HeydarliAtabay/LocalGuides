import './App.css';
import Login from './Components/Login'
import React, { Component } from 'react';
import Sidebar from './Components/Sidebar';
import ProfileUser from './Components/ProfileUser';

class App extends Component {
  render() {
    return (
      <div>
        <ProfileUser/>
        {/* <Sidebar></Sidebar>
        <Login></Login> */}
      </div>
    );
  }
}

export default App;