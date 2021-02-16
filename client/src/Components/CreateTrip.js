import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'
import GuideItem from './GuideItem'
import "./CSS/CreateTrip.css"
import { Button,FormCheck,Form } from 'react-bootstrap'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function CreateTrip() {
    const [startDate, setStartDate] = useState(new Date());
    const [startNum, setStartNum]=useState(new Number())

        return (
            <div className="trip">
            <h3 className="title">Create a trip</h3>
            <div className="requestcont">
                <div className="datecont">
                <h4>From</h4>
                <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                <h4>To</h4>
                <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
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
            <Form.Check inline label="Night life" type='checkbox'/>
            <Form.Check inline label="Museums" type='checkbox'/>
            </Form>
                </div>
                <div className="datecont">
                <h5>Number of tourists</h5>
                
                </div>
                <div><Button variant="success" size="lg"> Send the request</Button> </div>
            
      

            </div>
           
               
               
           
            
        </div>
        )
    }
export default CreateTrip
