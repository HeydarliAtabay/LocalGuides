import './App.css';
import Login from './Components/Login'
import React, { Component } from 'react';
import Sidebar from './Components/Sidebar';
import ProfileUser from './Components/ProfileUser';

import Inbox from './Components/Inbox';
import Chat from './Components/Chat';

import GuideList from './Components/GuideList'

import {Switch} from 'react-router';
import { BrowserRouter,Redirect, Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Sidebar/>
        <BrowserRouter>
      <Switch>
              
              <Route path="/login">
               <Login/>
              </Route>
              <Route path="/user">
               <ProfileUser/>
              </Route>
              <Route path="/guides">
               <GuideList/>
              </Route>
             </Switch>  
       </BrowserRouter>
      </div>
    );
  }
}

export default App;