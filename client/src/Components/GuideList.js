import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GuideItem from './GuideItem'
import API from '../API/APIuser'
import "./CSS/Guidelist.css"
import { Link } from 'react-router-dom';


//images(Sonra dazixajaxlar)
import profile from '../assets/profile.jpg'
import bayram from "../assets/bayram.jpg"
import Azerbaijan from '../assets/az.png'
import Russia from '../assets/ru.png'
import Usa from '../assets/us.png'
import Italia from '../assets/it.png'

const filter = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1 0h22l-9 15.094v8.906l-4-3v-5.906z"/></svg>;



const city = 'Turin'

export default class GuideList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            guidelist: []
        }
    }

    static propTypes = {
        prop: PropTypes
    }


    componentDidMount(){
        // default city is Torino it will be changed after real implementation
        if(this.props.guidelist.length > 0){
            this.setState({guidelist: this.props.guidelist});
         }
         else{ 
            API.getGuideList(city)
            .then((guides) => {
                this.setState({guidelist: guides});

            }).catch((error) => {
                console.error(error);
            })
        }
    }

    render() {
        return (
            <div className="guidelist">
                <h3 className="title">Guides in {city}</h3>
                <h2 className="filtertxt">
                    <Link to="/filter" >
                        <label>{filter} search by filter</label>
                    </Link>
                    
                </h2>
           
                <div className="guideitemcont">
                    {
                        this.state.guidelist.map(guide => {
                            return (
                                <Link to={'/guide'} onClick={() =>this.props.setGuide(guide.id)}>
                                    <GuideItem
                                    username={guide.name + ' ' + guide.surname} 
                                    photo={guide.photo} 
                                    flag1={Azerbaijan} 
                                    flag2={Italia}
                                    flag3={Usa}
                                    rating={guide.rating}
                                    price={guide.price}
                                    />
                                </Link>
                                
                            )
                        })
                    }
                
                {/* <GuideItem
                username="Vasif Ağalarov" 
                photo={profile}
                flag1={Russia} 
                flag2={Italia}
                flag3={Azerbaijan}
                rating={5}
                price={12}
                
                />
                <GuideItem 
                username="Bayram Nurlu" 
                photo={bayram}
                flag1={Usa} 
                flag2={Italia}
                flag3={Russia}
                rating={1}
                price={75}
                /> */}
                </div>
            </div>
        )
    }
}
