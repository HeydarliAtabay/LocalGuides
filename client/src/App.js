import './App.css';
import Login from './Components/Login'
import React, { Component } from 'react';
import Sidebar from './Components/Sidebar';
import ProfileUser from './Components/ProfileUser';
import Inbox from './Components/Inbox';
import Chat from './Components/Chat';

class App extends Component {
  render() {
    return (
      <div>
        <Chat/>
        {/* <Inbox/> */}
        {/* <ProfileUser/> */}
        {/* <Sidebar></Sidebar>
        <Login></Login> */}
      </div>
    );
  }
}

export default App;