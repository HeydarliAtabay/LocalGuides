import './App.css';
import Login from './Components/Login'
import React, {Component} from 'react';
import Sidebar from './Components/Sidebar';
import ProfileUser from './Components/ProfileUser';
import ProfileGuide from './Components/ProfileGuide';

import Inbox from './Components/Inbox';
import Chat from './Components/Chat';

import GuideList from './Components/GuideList'
import Filter from './Components/Filter'
import CreateTrip from './Components/CreateTrip'

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
        city: null,
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

    setCity = (e) =>{
      this.setState({city: e})
    }

    render() {
    return (
     
        <BrowserRouter>
        {
          this.state.user && <Redirect to='/main'/>
        }
        {
          // this.state.user && 
          <Sidebar setUser={this.setUser} user={this.state.user}/>
        }
          <Switch>
            <Route  exact path="/">
              <Login setUser={this.setUser}/>
            </Route>
            <Route path="/user">
              
                {/* <Sidebar setUser={this.setUser} user={this.state.user}/> */}
                <ProfileUser setUser={this.setUser} user={this.state.user}/>
             
            </Route>
            <Route path="/guides">
              
                {/* <Sidebar setUser={this.setUser} user={this.state.user}/> */}
                <GuideList city={this.state.city} setGuide={this.setGuide}/>

            </Route>

            <Route path="/filter">
             
                {/* <Sidebar setUser={this.setUser} user={this.state.user}/> */}
                <Filter/>

            </Route>

            <Route path="/create">
              
                {/* <Sidebar setUser={this.setUser} user={this.state.user}/> */}
                <CreateTrip/>
            

            </Route>

            <Route path="/guide">
            
                {/* <Sidebar setUser={this.setUser} user={this.state.user}/> */}
                <ProfileGuide guide={this.state.guide} user={this.state.user} setChat={this.setChat}/>
             
            </Route>

            

            <Route path="/inbox">
              
                {/* <Sidebar setUser={this.setUser} user={this.state.user}/> */}
                <Inbox user={this.state.user} setChat={this.setChat}/>
              

            </Route>
            <Route path="/chat">
              
                {/* <Sidebar setUser={this.setUser} user={this.state.user}/> */}
                <Chat user={this.state.user} chat={this.state.chat}/>
            </Route>
            <Route path="/main">
            
               {/* <Sidebar setUser={this.setUser} user={this.state.user}/> */}
                <MainPage user={this.state.user} setCity={this.setCity}/>
          
                {
                  // this.state.user && 
                  <div id="bottom-navbar">
                    <Bottombar/>
                  </div>
                  
                }
              

            </Route>
          </Switch>
        </BrowserRouter>
     
    );
  }
}

export default App;