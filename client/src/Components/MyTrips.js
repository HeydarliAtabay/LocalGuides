import React from 'react';
import API from '../API/APIuser.js';
import { Link } from 'react-router-dom';
import './CSS/MyTrips.css';
import photo from '../assets/profile.jpg';


class MyTrips extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trips: []
        }
    }

    componentDidMount(){
        API.getMyTrips(this.props.user.id)
            .then((myTrips) => {
                this.setState({trips: myTrips});
            }).catch((err) => {
                console.log(err);
            })
    }
 
    render() {
        return (
            <div className="trips">

                <label className="header">My Trips</label>

                {
                    this.state.trips.map( trip => {
                        return (
                            <Link >
                                <div className="trips-item" key={trip.id}>
                                    <span>
                                    <br></br>
                                        <div className="itemHead">City: </div> 
                                        <div className="itemDet">{trip.City}</div>
                                        {/* <br></br> */}
                                        <div className="itemHead">Start Date:</div>
                                         <div className="itemDet">{trip.StartDate}</div>  
                                        {/* <br></br> */}
                                        <div className="itemHead">End Date:</div>
                                         <div className="itemDet">{trip.EndDate}</div> 
                                        {/* <br></br> */}
                                        <div className="itemHead">Guide:</div>
                                         <div className="itemDet">{trip.name} {trip.surname}</div>
                                        {/* <br></br> */}
                                        <div className="itemHead">Status:</div>
                                         <div className="itemDet">{trip.Status}</div> 

                                    </span>
                                </div>
                            </Link>
                        )
                    })
                }                
            </div>
        );
    }
}

export default MyTrips;