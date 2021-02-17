import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GuideItem from './GuideItem'
import "./CSS/Filter.css"
import { Button,FormCheck,Form } from 'react-bootstrap'
import Slider from '@material-ui/core/Slider';
import API from '../API/APIuser.js';
import { Link } from 'react-router-dom';


export default class Filter extends Component {
    static propTypes = {
        prop: PropTypes
    }
    constructor(props) {
      super(props);
      this.state = {
          price: null,

      }
  }

  


    render() {
        const pricemarks = [
            {
              value: 0,
              label: '0€',
            },
            {
              value: 15,
              label: '15€',
            },
            {
              value: 25,
              label: '25€',
            },
            {
                value: 35,
                label: '35€',
              },
            {
              value: 50,
              label: '50€',
            },
          ];
          const ratingmarks = [
            {
              value: 0,
              label: '0',
            },
            {
              value: 1,
              label: '1',
            },
            {
              value: 2,
              label: '2',
            },
            {
              value: 3,
              label: '3',
            },
            {
                value: 4,
                label: '4',
              },
              {
                value: 5,
                label: '5',
              },
          ];
        return (
            <div className="guidelist">
            <h3 className="title">Filters</h3>
            <h2 className="filtertxt">Clear selections</h2>
            <div className="pricecont">

            <h3 style={{marginLeft:20}}>Price range</h3>
 <div className="slider">
 <Slider 
  defaultValue={[15,35]}
  aria-labelledby="discrete-slider-custom"
  step={1}
  max={50}
  valueLabelDisplay="auto"
  marks={pricemarks}
/> 
     </div>       

            </div>
            <div className="ratingcont">
            <h3 style={{marginLeft:20}}>Rating</h3>  
            <div className="slider">
            <Slider 
  defaultValue={[4]}
  aria-labelledby="discrete-slider-custom"
  step={1}
  max={5}
  valueLabelDisplay="auto"
  marks={ratingmarks}
/>
            </div>
            
            </div>
            <div className="languagecont">
            <h3 style={{marginLeft:20}}>Languages</h3>
            <div className="langcheck">
            <Form>
            <Form.Check inline label="Italian"  type='checkbox'/>
            <Form.Check inline label="English" type='checkbox'/>
             <Form.Check inline label="Russian" type='checkbox'/>
            <Form.Check inline label="Azerbaijani" type='checkbox'/>
            <Form.Check inline label="Turkish" type='checkbox'/>
             <Form.Check inline label="Polish" type='checkbox'/>
      </Form>
      </div>

            </div>
            
            <div className="gendercont">
            <h3 style={{marginLeft:20}}>Gender</h3>
            <div className="langcheck">
            <Form>
            <Form.Check inline label="Male"  type='radio' name="gender"/>
            <Form.Check inline label="Female" type='radio' name="gender"/>
             <Form.Check inline label="All" type='radio' name="gender"/>
      </Form>
      </div>
            </div>

            <div className="interestcont">
            <h3 style={{marginLeft:20}}>Interests</h3>
            <div className="langcheck">
            <Form>
            <Form.Check inline label="Sport"  type='checkbox'/>
            <Form.Check inline label="Art" type='checkbox'/>
             <Form.Check inline label="Night life" type='checkbox'/>
            <Form.Check inline label="Museums" type='checkbox'/>
      </Form>
      </div>
            </div>

            <div className="buttonapp">
              <Link to='/guides'>
                <Button onClick={this.props.setFilter()} variant="success" size="lg"> Apply</Button>
              </Link>
            </div>
               
               
           
            
        </div>
        )
    }
}
