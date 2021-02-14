import './App.css';
import Login from './Components/Login'
import React, {Component} from 'react';
import Sidebar from './Components/Sidebar';
import ProfileUser from './Components/ProfileUser';
import ProfileGuide from './Components/ProfileGuide';

import Inbox from './Components/Inbox';
import Chat from './Components/Chat';

import GuideList from './Components/GuideList'

import {Switch} from 'react-router';
import {BrowserRouter, Redirect, Route} from 'react-router-dom'
import {withRouter} from 'react-router-dom';
import MainPage from './Components/MainPage';
import Bottombar from './Components/Bottombar';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        user: null,
        guide: undefined,
        chat: null,
        name: ""
      }
    }

    setUser=(e)=>{
       this.setState({user: e})
    }

    setGuide=(e)=>{
      this.setState({guide: e})
   }

    setChat = (e)=>{
      this.setState({chat: e})
    }

    render() {
    return (
      <div>
        <BrowserRouter>
        {/* <Sidebar/> */}
        {this.state.user && 
        <>
        <Redirect to='/main'/>
        </>
        }
        {/* {this.state.user && 
        <Sidebar setUser={this.setUser}/>
    } */}
          <Switch>
            <Route  exact path="/">
              <Login setUser={this.setUser}/>
            </Route>
            <Route path="/user">
              <div style={{
                display: "flex"
              }}>
                <Sidebar setUser={this.setUser} user={this.state.user}/>
                <ProfileUser setUser={this.setUser} user={this.state.user}/>
              </div>
            </Route>
            <Route path="/guides">
              <div style={{
                display: "flex"
              }}>
                <Sidebar setUser={this.setUser} user={this.state.user}/>
                <GuideList/>
              </div>

            </Route>

            <Route path="/guide">
              <div style={{
                display: "flex"
              }}>
                <Sidebar setUser={this.setUser} user={this.state.user}/>
                <ProfileGuide guide={this.state.guide}/>
              </div>

            </Route>

            <Route path="/inbox">
              
                <Sidebar setUser={this.setUser} user={this.state.user}/>
                <Inbox user={this.state.user} setChat={this.setChat}/>
              

            </Route>
            <Route path="/chat">
              
                <Sidebar setUser={this.setUser} user={this.state.user}/>
                <Chat user={this.state.user} chat={this.state.chat}/>
            </Route>
            <Route path="/main">
              <div style={{
                display: "flex"
              }}>
               <Sidebar setUser={this.setUser} user={this.state.user}/>
                <MainPage user={this.state.user}/>
              </div>
              <Bottombar></Bottombar>

            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;