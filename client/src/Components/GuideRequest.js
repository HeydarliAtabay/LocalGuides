import React, {Component} from 'react'
import PropTypes from 'prop-types'
import GuideItem from './GuideItem'
import "./CSS/GuideRequest.css"
import {Button, FormCheck, Form} from 'react-bootstrap'
import Slider from '@material-ui/core/Slider';
import photo from '../assets/profile.jpg';

export default class GuideRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
            guide: {
                id: undefined,
                photo: undefined,
                rating: 0,
                name: undefined,
                surname: undefined,
                language: undefined,
            }
        }
}

  render() {
    const pricemarks = [];
    const ratingmarks = [];
    return (
      <div className="guidelist">
        <h3 className="title">You have a new request!</h3>
        <div className="pricecont">

          <div className="slider"></div>
          <div className="profile-photo">
          <img alt="Profile" 
                        src={this.state.guide.photo || photo} />
                       
          <h4>Samira Mammadova</h4>
          <h5>Age: 24</h5>
          <h5>Country: Azerbaijan</h5>
          </div>
          <div className="priceconts">
            <h4 >Trip information</h4>
         
          <div className="priceconts">
            <h5 >Date</h5>
            <p>From: 08/02/2021</p>
            <p>To: 10/02/2021</p>
          </div>
          <div className="priceconts">
            <h5 >Preferences</h5>
            <p>Languages: English</p>
            <p>Activities: Museum, Night life</p>
          </div>
          <h6>Number of Tourists: 3</h6>
          </div>
          <Button size='lg' variant="success">Confirm</Button>
        </div>
      </div>
    )
  }
}
