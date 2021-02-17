import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'
import GuideItem from './GuideItem'
import "./CSS/CreateTrip.css"
import { Button,FormCheck,Form } from 'react-bootstrap'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import API from '../API/APIuser.js';
import { Link } from "react-router-dom";

const calendar = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z"/></svg>;
const backbutton = <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z"/></svg>


function CreateTrip(props) {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [startNum, setStartNum]=React.useState("");


    const onChangeHandler = event => {
        setStartNum(event.target.value);
      };
      
    const sendTripRequest = () => {
    API.sendTripRequest(startDate, endDate, props.guide, "Turin", startNum, "waiting", props.user.id)
        .then((res) => {   

        }).catch((error) => {
            console.error(error);
        })
    
      };

        return (
            <div className="trip">
            {/* <h3 > */}
                <span className="btn-x">
                        <Link to="/guide" >{backbutton}</Link>
                </span>
            {/* </h3> */}
            <div className="requestcont">
                <span className="ttl">
                    <b>Create a trip request</b>
                </span>
                <div className="datecont dt">
                    <h4>From</h4>
                    <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                    {calendar}
                    <h4>To</h4>
                    <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
                    {calendar}
                </div>

                <div className="datecont">
                    <h4>Languages</h4>
                    <Form>
                        <Form.Check inline label="Italian"  type='checkbox'/>
                        <Form.Check inline label="English" type='checkbox'/>
                        <Form.Check inline label="Russian" type='checkbox'/>
                        <Form.Check inline label="Azerbaijani" type='checkbox'/>
                        <Form.Check inline label="Turkish" type='checkbox'/>
                        <Form.Check inline label="Polish" type='checkbox'/>
                    </Form>
                </div>

                <div className="datecont">
                    <h4>Preferences</h4>
                    <Form>
                        <Form.Check inline label="Sport"  type='checkbox'/>
                        <Form.Check inline label="Art" type='checkbox'/>
                        <Form.Check inline label="Music" type='checkbox'/>
                        <Form.Check inline label="Museum" type='checkbox'/>
                        <Form.Check inline label="Shopping" type='checkbox'/>
                        <Form.Check inline label="Games" type='checkbox'/>
                    </Form>
                </div>

                <div className="datecont num">
                    <span>Number of tourists </span>
                    <input value={startNum} onChange={onChangeHandler} type="number" id="tentacles" name="tentacles" min="1" max="10"></input>
                </div>

                <div className="send-trip">
                    <Link to='/trips'>
                        <Button onClick={()=>sendTripRequest()} variant="success" size="lg"> Send the request</Button>
                    </Link> 
                </div>
            </div>            
        </div>
        )
    }

export default CreateTrip
