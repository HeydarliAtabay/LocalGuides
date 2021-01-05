import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GuideItem from './GuideItem'
import "./CSS/Guidelist.css"

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
            <GuideItem />
            <GuideItem/>
            <GuideItem/>
            </div>
            
        </div>
        )
    }
}
