import React, {Component} from 'react'
import PropTypes from 'prop-types'
import GuideItem from './GuideItem'
import "./CSS/GuideRequest.css"
import {Button, FormCheck, Form} from 'react-bootstrap'
import Slider from '@material-ui/core/Slider';
import photo from '../assets/profile.jpg';
import API from '../API/APIuser.js';
import { Link } from "react-router-dom";

const calendar = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z"/></svg>;
const backbutton = <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z"/></svg>


export default class GuideRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
            guide: {
                id: undefined,
                photo: undefined,
                name: undefined,
                surname: undefined,
                language: undefined,
            },

            rejected: false,
            confirmed: false
        }
}

 acceptTripRequest = () => {
    API.acceptTripRequest(this.props.user.id, this.props.guide)
      .then((myTrips) => {
          // this.setState({trips: myTrips});

      }).catch((err) => {
          console.log(err);
      })
  }

  confirm = () => {
    this.setState({confirmed: true})
  }

  reject = () => {
    this.setState({rejected: true})
  }

  render() {
    const pricemarks = [];
    const ratingmarks = [];

    if(this.state.rejected) {
      return <div className="no-req">You don't have a request trip...</div>
    } else {
        return (
          <div className="guidereq">
                <span className="btn-x">
                      <span onClick={this.reject}>{backbutton}</span>
                </span>
    
                {/* <div className="requestcontain"> */}
                    <span className="ttlr">
                        <b>You have a new request!</b>
                    </span>
                    <div className="profile-photo-req">
                      <img alt="Profile" 
                                    src={this.state.guide.photo || photo} />
                      <span id="prof-data">
                        <label> <b>Victoria Valentin</b>i</label>
                        <label> <b>Age: </b>24</label>
                        <label> <b>Country: </b> Italy</label>
                      </span>
    
                    <div className="datecontain">
                      <span ><center><h5>Trip information</h5></center></span>
                      <div className="datecontain">
                        <h5 >Date</h5>
                        <label><b>From: </b> 08/02/2021</label><br/>
                        <label><b>To: </b> 10/02/2021</label>
                      </div>
                        
    
                        <div className="datecontain">
                            <h5 >Preferences</h5>
                        <label><b>Languages: </b>English</label>
                        <label><b>Interests: </b>Museum, Art</label>
                    </div>
    
                    <div className="datecontain num">
                      <label><b>Number of Tourists: </b> 3</label>
                    </div>
                    </div>
    
                    
                    </div>
    
                    {/* <span >Trip information</span>
    
                    <div className="datecontain">
                            <h5 >Date</h5>
                        <p>From: 08/02/2021</p>
                        <p>To: 10/02/2021</p>
                    </div>
    
                    <div className="datecontain">
                            <h5 >Preferences</h5>
                        <p>Languages: English</p>
                        <p>Activities: Museum, Night life</p>
                    </div>
    
                    <div className="datecontain num">
                      <h6>Number of Tourists: 3</h6>
                    </div> */}
    
                    <div className="btn-confirm">
                        {/* <Link to='/trips'> */}
                            <Button onClick={this.confirm} 
                                    variant="success" 
                                    size="lg"
                                    disabled={this.state.confirmed ? true: false}> 
                              {
                                this.state.confirmed ? 'Request confirmed' : 'Confirm'
                              }
                            </Button>
                        {/* </Link>  */}
                    </div>
                {/* </div>             */}
            
            {/* <h3 className="title"></h3> */}
            {/* <div className="pricecont"> */}
    
              {/* <div className="slider"></div> */}
              {/* <div className="profile-photo">
              <img alt="Profile" 
                            src={this.state.guide.photo || photo} />
                          
              <h4>Victoria Valentini</h4>
              <h5>Age: 24</h5>
              <h5>Country: Italy</h5>
              </div> */}
              {/* <div className="priceconts"> */}
                {/* <h4 >Trip information</h4> */}
            
              {/* <div className="priceconts"> */}
                {/* <h5 >Date</h5>
                <p>From: 08/02/2021</p>
                <p>To: 10/02/2021</p> */}
              {/* </div> */}
              {/* <div className="priceconts">
                <h5 >Preferences</h5>
                <p>Languages: English</p>
                <p>Activities: Museum, Night life</p>
              </div> */}
              {/* <h6>Number of Tourists: 3</h6> */}
              {/* </div> */}
              {/* <Button onClick={()=>this.acceptTripRequest()} size='lg' variant="success">Confirm</Button> */}
            {/* </div> */}
          </div>
        )
    }

    
  }
}
