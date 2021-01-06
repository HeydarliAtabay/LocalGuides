import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GuideItem from './GuideItem'
import "./CSS/Guidelist.css"


//images(Sonra dazixajaxlar)
import profile from '../assets/profile.jpg'
import bayram from "../assets/bayram.jpg"
import Azerbaijan from '../assets/az.png'
import Russia from '../assets/ru.png'
import Usa from '../assets/us.png'
import Italia from '../assets/it.png'


export default class GuideList extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className="guidelist">
            <h3 className="title">Guides in Goranboy</h3>
            <h2 className="filtertxt">search by filter</h2>
           
            <div className="guideitemcont">
            <GuideItem
             username="Əlövsəd Əmiraslanov" 
             photo={profile} 
             flag1={Azerbaijan} 
             flag2={Italia}
             flag3={Usa}
             rating={4}
             price={15}
             />
            <GuideItem
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
            />
            </div>
            
        </div>
        )
    }
}
