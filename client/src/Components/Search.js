import React, { Component } from 'react';

//Import React Scrit Libraray to load Google object
import Script from 'react-load-script';

class Search extends Component {
  
  // Define Constructor
  constructor(props) {
    super(props);

    // Declare State
    this.state = {
      city: '',
      query: ''
    };

  }

  // handleChange(event) {

  //   this.setState({city: event.target.value});

  // }

  // handleScriptLoad = () => {
  //   // Declare Options For Autocomplete
  //   const options = {
  //     types: ['(cities)'],
  //   };

  //   // Initialize Google Autocomplete
  //   /*global google*/ // To disable any eslint 'google not defined' errors
  //   this.autocomplete = new google.maps.places.Autocomplete(
  //     document.getElementById('autocomplete'),
  //     options,
  //   );
  //   this.autocomplete.setFields(['address_components', 'formatted_address']);

  //   // Fire Event when a suggested name is selected
  //   this.autocomplete.addListener('place_changed', this.handlePlaceSelect);
  // }
  
  // handlePlaceSelect = () => {

  //   // Extract City From Address Object
  //   const addressObject = this.autocomplete.getPlace();
  //   const address = addressObject.address_components;

  //   // Check if address is valid
  //   if (address) {
  //     // Set State
  //     this.setState(
  //       {
  //         city: address[0].long_name,
  //         query: addressObject.formatted_address,
          
  //       }
  //     );
  //   }
  // }

  render() {
    return (
      <div>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyAdsWZhSz2ywKbP99Zl1uaw65oTBqtSiJI&libraries=places"
          onLoad={this.props.handleScriptLoad}
        />
        <input onChange={(e)=>this.props.handleChangeSearch(e)} value={this.props.location} id="autocomplete" placeholder="search city..." 
          style={{
            margin: '0 auto',
            maxWidth: 800,
          }}
        />
        
      </div>
    );
  }
}

export default Search;