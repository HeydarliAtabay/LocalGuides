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
          filter: this.props.filterStates
      }
  }

  handleChange = (e, event, val) => {
        switch(event){
          case 'price': this.setState({filter:{ price: val, 
                                                rating: this.state.filter.rating, 
                                                gender: this.state.filter.gender,
                                                languages: this.state.filter.languages,
                                                interests: this.state.filter.interests}})
            break;
          case 'rating': this.setState({filter:{  price: this.state.filter.price, 
                                                  rating: val, 
                                                  gender: this.state.filter.gender,
                                                  languages: this.state.filter.languages,
                                                  interests: this.state.filter.interests}})
            break;
          case 'lang':  let lang = this.state.filter.languages
                        if(e.target.checked) lang.push(val)
                        else lang = lang.filter((it)=>{return it != val})
                        this.setState({filter:{ price: this.state.filter.price, 
                                                rating: this.state.filter.rating, 
                                                gender: this.state.filter.gender,
                                                languages: lang,
                                                interests: this.state.filter.interests}})
            break;
          case 'gender': this.setState({filter:{  price: this.state.filter.price, 
                                                  rating: this.state.filter.rating, 
                                                  gender: val,
                                                  languages: this.state.filter.languages,
                                                  interests: this.state.filter.interests}})
            break;
          case 'interests': let inter = this.state.filter.interests
                            if(e.target.checked) inter.push(val)
                            else inter = inter.filter((it)=>{return it != val})
                            this.setState({filter:{ price: this.state.filter.price, 
                                                    rating: this.state.filter.rating, 
                                                    gender: this.state.filter.gender,
                                                    languages: this.state.filter.languages,
                                                    interests: inter}})
            break;
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
            <div className="flt">
              <h3 className="title">Filters</h3>
              <h2 className="filtertxt" onClick={this.props.clrfilter}>
                <Link to="/guides" >Clear selections</Link>
              </h2>
            <div className="pricecont">

              <h3 style={{marginLeft:20}}>Price range (€/hr)</h3>
              <div className="slider">
                <Slider 
                  defaultValue={[this.props.filterStates.price[0], this.props.filterStates.price[1]]}
                  onChange={(e, val) => this.handleChange(e, 'price', val)} 
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
                  defaultValue={[this.props.filterStates.rating[0], this.props.filterStates.rating[1]]}
                  onChange={(e, val) => this.handleChange(e, 'rating', val)} 
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
            <div className="langcheck interests-container">
                  <span>
                    <input type="checkbox" 
                            id="it" 
                            name="it" 
                            defaultChecked={this.state.filter.languages.some((it)=> it === 'it')}
                            onChange={(e) => this.handleChange(e, 'lang', 'it')}/>
                    <label htmlFor="it"> Italian</label>
                  </span>
                  
                  <span>
                    <input type="checkbox" 
                          id="en" 
                          name="en" 
                          defaultChecked={this.state.filter.languages.some((it)=> it === 'en')}
                          onChange={(e) => this.handleChange(e, 'lang', 'en')}/>
                    <label htmlFor="en"> English</label>
                  </span>

                  <span>
                    <input type="checkbox" 
                          id="ru" 
                          name="ru" 
                          defaultChecked={this.state.filter.languages.some((it)=> it === 'ru')}
                          onChange={(e) => this.handleChange(e, 'lang', 'ru')}/>
                    <label htmlFor="ru"> Russian</label>
                  </span>

                  <span>
                    <input type="checkbox" 
                          id="az" 
                          name="az" 
                          defaultChecked={this.state.filter.languages.some((it)=> it === 'az')}
                          onChange={(e) => this.handleChange(e, 'lang', 'az')}/>
                    <label htmlFor="az"> Azerbaijani</label>
                  </span>

                  <span>
                    <input type="checkbox" 
                          id="tr" 
                          name="tr" 
                          defaultChecked={this.state.filter.languages.some((it)=> it === 'tr')}
                          onChange={(e) => this.handleChange(e, 'lang', 'tr')}/>
                    <label htmlFor="tr"> Turkish</label>
                  </span>

                  <span>
                    <input type="checkbox" 
                          id="pl" 
                          name="pl" 
                          defaultChecked={this.state.filter.languages.some((it)=> it === 'pl')}
                          onChange={(e) => this.handleChange(e, 'lang', 'pl')}/>
                    <label htmlFor="pl"> Polish</label>
                  </span>
                  
              {/* <Form>
                    <Form.Check inline label="Italian"  type='checkbox'/>
                    <Form.Check inline label="English" type='checkbox'/>
                    <Form.Check inline label="Russian" type='checkbox'/>
                    <Form.Check inline label="Azerbaijani" type='checkbox'/>
                    <Form.Check inline label="Turkish" type='checkbox'/>
                    <Form.Check inline label="Polish" type='checkbox'/>
              </Form> */}
            </div>

            </div>
            
            <div className="gendercont">
              <h3 style={{marginLeft:20}}>Gender</h3>
            <div className="langcheck">
                  <span>
                    <input type="radio" 
                            id="male" 
                            name="gender" 
                            defaultChecked= {this.state.filter.gender === 'Male'}
                            onChange={(e) => this.handleChange(e, 'gender', 'Male')}/>
                    <label htmlFor="male"> Male</label>
                  </span>

                  <span>
                    <input type="radio" 
                            id="female" 
                            name="gender" 
                            defaultChecked= {this.state.filter.gender === 'Female'}
                            onChange={(e) => this.handleChange(e, 'gender', 'Female')}/>
                    <label htmlFor="female"> Female</label>
                  </span>

                  <span>
                    <input type="radio" 
                            id="all" 
                            name="gender" 
                            defaultChecked= {this.state.filter.gender === 'All'}
                            onChange={(e) => this.handleChange(e, 'gender', 'All')}/>
                    <label htmlFor="all"> All</label>
                  </span>
                  {/* <Form>
                        <Form.Check inline label="Male"  type='radio' name="gender"/>
                        <Form.Check inline label="Female" type='radio' name="gender"/>
                        <Form.Check inline label="All" type='radio' name="gender"/>
                  </Form> */}
            </div>
            </div>

            <div className="interestcont">
              <h3 style={{marginLeft:20}}>Interests</h3>
            <div className="langcheck">
                  <span>
                    <input type="checkbox" 
                            id="sport" 
                            name="Sport" 
                            defaultChecked={this.state.filter.interests.some((it)=> it === 'sport')}
                            onChange={(e) => this.handleChange(e, 'interests', 'sport')}/>
                    <label htmlFor="sport"> Sport</label>
                  </span>
                  
                  <span>
                    <input type="checkbox" 
                          id="music" 
                          name="music" 
                          defaultChecked={this.state.filter.interests.some((it)=> it === 'music')}
                          onChange={(e) => this.handleChange(e, 'interests', 'music')}/>
                    <label htmlFor="music"> Music</label>
                  </span>

                  <span>
                    <input type="checkbox" 
                          id="games" 
                          name="games" 
                          defaultChecked={this.state.filter.interests.some((it)=> it === 'games')}
                          onChange={(e) => this.handleChange(e, 'interests', 'games')}/>
                    <label htmlFor="games"> Games</label>
                  </span>

                  <span>
                    <input type="checkbox" 
                          id="museum" 
                          name="museum" 
                          defaultChecked={this.state.filter.interests.some((it)=> it === 'museum')}
                          onChange={(e) => this.handleChange(e, 'interests', 'museum')}/>
                    <label htmlFor="museum"> Museum</label>
                  </span>


                  <span>
                    <input type="checkbox" 
                          id="art" 
                          name="art" 
                          defaultChecked={this.state.filter.interests.some((it)=> it === 'art')}
                          onChange={(e) => this.handleChange(e, 'interests', 'art')}/>
                    <label htmlFor="art"> Art</label>
                  </span>

              {/* <Form>
                    <Form.Check inline label="Sport"  type='checkbox'/>
                    <Form.Check inline label="Art" type='checkbox'/>
                    <Form.Check inline label="Night life" type='checkbox'/>
                    <Form.Check inline label="Museums" type='checkbox'/>
              </Form> */}
            </div>
            </div>

            <div className="buttonapp">
              <Link to='/guides'>
                <Button onClick={()=>this.props.setFilter(this.state.filter)} variant="success" size="lg"> Apply</Button>
              </Link>
            </div>
               
               
           
            
        </div>
        )
    }
}
