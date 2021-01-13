import React, {Component} from 'react';
import {Card, Image, Form, Button} from 'react-bootstrap';
import './CSS/MainPage.css'

class MainPage extends Component {

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
                alert(city +" "+ country); 
                return; 
            } 
        } 
  

    }
    
  }
  
  render() {
    return (
      <div id="main">
        <h3 id="mainText">Choose Your Next Destination</h3>
        <div id='card'>
          <input type='text'></input>
          <br></br>
          <br></br>
          <Button onClick={this.callLoc} block>Find Guides in Current Location</Button>
        </div>


        
      </div>
    );
  }
}

export default MainPage;