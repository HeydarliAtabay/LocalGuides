import React, {Component} from 'react';
import {Card, Image, Form, Button} from 'react-bootstrap';
import './CSS/MainPage.css'
import Search from './Search';
import Script from 'react-load-script';

class MainPage extends Component {


  constructor(props) {
    super(props);
    // this.setLoc = this.setLoc.bind(this);
    // this.callLoc = this.callLoc.bind(this);
    this.state = {
      location: ""
    }
  }
  componentDidMount(){
    this.callLoc();
  }
  setLoc=(e)=>{
    this.setState({location: e});
    alert(e);

     }

  

  callLoc=()=>{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getPosition);
    }
    function getPosition(position) {
        var xhr = new XMLHttpRequest(); 
        var lat = position.coords.latitude; 
        var lng = position.coords.longitude; 
      
        xhr.open('GET', "https://us1.locationiq.com/v1/reverse.php?key=pk.f64fe2240d5f7c28fb60679c3b465444&lat=" +lat + "&lon=" + lng + "&format=json", true); 
        xhr.send(); 
        xhr.onreadystatechange = processRequest; 
        xhr.addEventListener("readystatechange", processRequest, false); 
    
        function processRequest(e) { 
            if (xhr.readyState == 4 && xhr.status == 200) { 
                var response = JSON.parse(xhr.responseText); 
                var city = response.address.city; 
                var country = response.address.country; 
                var res = city.concat(", ", country);
                window.t=res;
                return res; 
            } 
        }
    }
    this.setLoc(window.t);
  }

  
  render() {
    return (
      <div id="main">
        <Script url="https://maps.googleapis.com/maps/api/js?                               key=your_api_key&libraries=places"          
      onLoad={this.handleScriptLoad}        />
         
        <h3 id="mainText">Choose Your Next Destination</h3>
        <div id='card'>
      <div class="input-group">
          <Search location={this.state.location}/>
          <Button onClick={this.callLoc}>Search</Button>
          </div>
          <br></br>
          <Button onClick={()=>this.callLoc()} block>Near by Guides</Button>
        </div>

      </div>
    );
  }
}

export default MainPage;