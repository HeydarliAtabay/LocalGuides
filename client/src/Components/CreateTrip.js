import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GuideItem from './GuideItem'
import "./CSS/CreateTrip.css"
import { Button,FormCheck,Form } from 'react-bootstrap'
import Slider from '@material-ui/core/Slider';


export default class CreateTrip extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
       
        return (
            <div className="guidelist">
            <h3 className="title">Create a trip</h3>
            <div className="requestcont">

            <h3 style={{marginLeft:20}}>Price range</h3>
      

            </div>
           
               
               
           
            
        </div>
        )
    }
}
