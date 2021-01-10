import './App.css';
import Login from './Components/Login'
import React, {Component} from 'react';
import Sidebar from './Components/Sidebar';
import ProfileUser from './Components/ProfileUser';

import Inbox from './Components/Inbox';
import Chat from './Components/Chat';

import GuideList from './Components/GuideList'

import {Switch} from 'react-router';
import {BrowserRouter, Redirect, Route} from 'react-router-dom'
import {withRouter} from 'react-router-dom';
import MainPage from './Components/MainPage';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Sidebar/> */}
        <BrowserRouter>
          <Switch>

            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/user">
              <div style={{
                display: "flex"
              }}>
                <Sidebar/>
                <ProfileUser/>
              </div>
            </Route>
            <Route path="/guides">
              <div style={{
                display: "flex"
              }}>
                <Sidebar/>
                <GuideList/>
              </div>

            </Route>
            <Route path="/inbox">
              <div style={{
                display: "flex"
              }}>
                <Sidebar/>
                <Inbox/>
              </div>

            </Route>
            <Route path="/chat">
              <div style={{
                display: "flex"
              }}>
                <Sidebar/>
                <Chat/>
              </div>
            </Route>
            <Route path="/main">
              <div style={{
                display: "flex"
              }}>
                <Sidebar></Sidebar>
                <MainPage/>
              </div>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;