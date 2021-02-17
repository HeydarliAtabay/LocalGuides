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
import GuideRequest from './Components/GuideRequest'

import {Switch} from 'react-router';
import {BrowserRouter, Redirect, Route} from 'react-router-dom'
import {withRouter} from 'react-router-dom';
import MainPage from './Components/MainPage';
import MyTrips from './Components/MyTrips';
import Bottombar from './Components/Bottombar';
import API from './API/APIuser'

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        user: null,
        guide: undefined,
        chat: null,
        city: null,
        name: "",
        filter: false,
        guidelist: []
      }
    }

    setFilter=()=>{
      API.filterRequest(35, 4)
              .then((res) => {   
                console.log('setfilter api res' + res)
                this.setState({guidelist: res, filter: !this.state.filter});
              }).catch((error) => {
                  console.error(error);
              })

          // this.setState({filter: !this.state.filter});
            
    }

    clrfilter = () => {
      this.setState({guidelist: []});
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
          this.state.user && 
          <>
            <Sidebar setUser={this.setUser} user={this.state.user}/>
            <div id="bottom-navbar">
              <Bottombar user={this.state.user} guide={this.state.guide} />
            </div>
          </>
          
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
                <GuideList guidelist={this.state.guidelist} city={this.state.city} setGuide={this.setGuide}/>
            </Route>

            <Route path="/filter">
              <Sidebar></Sidebar>
                <Filter setFilter={this.setFilter} filter={this.state.filter} clrfilter={this.clrfilter}/>
            </Route>

            <Route path="/create">
              
                {/* <Sidebar setUser={this.setUser} user={this.state.user}/> */}
                <CreateTrip user={this.state.user} guide={this.state.guide}/>
            

            </Route>

            <Route path="/request">
              
              {/* <Sidebar setUser={this.setUser} user={this.state.user}/> */}
              <GuideRequest user={this.state.user} guide={this.state.guide}/>
          

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
              
                <Chat user={this.state.user} chat={this.state.chat}/>
            </Route>
            <Route path="/main">
            
                <MainPage user={this.state.user} setCity={this.setCity}/>             
              </Route>
            <Route path="/trips">
            
               {/* <Sidebar setUser={this.setUser} user={this.state.user}/> */}
                <MyTrips user={this.state.user} setCity={this.setCity} guide={this.state.guide} setChat={this.setChat}/>
          
                {/* {
                  // this.state.user && 
                  <div id="bottom-navbar">
                    <Bottombar setUser={this.setUser} user={this.state.user}/>
                  </div>
                  
                } */}
            </Route>
          </Switch>
        </BrowserRouter>
     
    );
  }
}

export default App;