import React, {Component} from 'react';
import {Card, Image, Form, Button} from 'react-bootstrap';
import './CSS/MainPage.css'
import Search from './Search';
import Script from 'react-load-script';
import { Link } from 'react-router-dom';
import picture from '../assets/myGuide.png'
const bell = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M22.656 6.383c-.216-.817.023-1.696.627-2.298l.003-.003c.475-.474.714-1.095.714-1.712 0-1.305-1.051-2.37-2.37-2.37-.618 0-1.239.238-1.714.712l-.002.003c-.604.604-1.48.844-2.299.626-5.93-1.57-11.011 7.819-16.211 5.179l-1.404 1.406 16.073 16.074 1.405-1.406c-2.64-5.198 6.751-10.28 5.178-16.211zm-.154-4.887c.444.443.444 1.165 0 1.608-.443.443-1.163.442-1.606-.001s-.444-1.164 0-1.606c.443-.444 1.164-.444 1.606-.001zm-11.731 20.504c-.646.646-1.535 1-2.422 1-.874 0-1.746-.346-2.376-.976-1.27-1.27-1.308-3.563-.024-4.846l4.822 4.822z"/></svg>;
class MainPage extends Component {


  constructor(props) {
    super(props);
    this.state = {
      location: ""
    }
  }
  componentDidMount(){
    this.callLoc();
  }

/////////////////////////

handleScriptLoad = () => {
  // Declare Options For Autocomplete
  const options = {
    types: ['(cities)'],
  };

  // Initialize Google Autocomplete
  /*global google*/ // To disable any eslint 'google not defined' errors
  this.autocomplete = new google.maps.places.Autocomplete(
    document.getElementById('autocomplete'),
    options,
  );
  this.autocomplete.setFields(['address_components', 'formatted_address']);

  // Fire Event when a suggested name is selected
  this.autocomplete.addListener('place_changed', this.handlePlaceSelect);
}

handlePlaceSelect = () => {

  // Extract City From Address Object
  const addressObject = this.autocomplete.getPlace();
  const address = addressObject.address_components;

  // Check if address is valid
  if (address) {
    // Set State
    this.props.setCity(address[0].long_name)
    this.setState(
      {
        city: address[0].long_name,
        query: addressObject.formatted_address,
        location: addressObject.formatted_address
        
      }
    );
  }
}


////////////////




  handleChangeSearch=(event)=> {
    // console.log(JSON.stringify(event.target)+" event");
    this.setState({location: event.target.value});
  }

  setLoc=(e)=>{
    this.setState({location: e});
    // alert(e);
     }
     searchLoc=(e)=>{
      this.setState({location: e});
      // alert(e);
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
        {this.props.user.userType==="guide" &&
  <>
  <div className="profile-photoM">
   <img alt="Profile" 
                        src={picture} /></div>
        <h1>Hello {this.props.user.name}</h1>
        <h5>{bell} You have new trip request! </h5>
        </>
        }

      {this.props.user.userType==="tourist" &&
        <>
        <Script url="https://maps.googleapis.com/maps/api/js?                               key=your_api_key&libraries=places"          
                onLoad={this.handleScriptLoad}        />
         
        <h3 id="mainText">Choose Your Next Destination</h3>
        <div id='crd'>
          <div class="input-group">
              <Search handlePlaceSelect={this.handlePlaceSelect} 
                      handleScriptLoad={this.handleScriptLoad} 
                      handleChangeSearch={this.handleChangeSearch} 
                      location={this.state.location}/>
              
              <Link to="/guides" >
                  <Button id={'search'} onClick={this.searchLoc}>Search</Button>
              </Link>
              
          </div>
            <Button id={'nearby'} onClick={()=>this.callLoc()} block>Near me</Button>
        </div>
        </>
         }

      </div>
    );
  }
}

export default MainPage;