import React from 'react';
import API from '../API/APIuser.js';
import { Link } from 'react-router-dom';
import './CSS/Inbox.css';
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
            <div className="inbox">

                <label className="header">My Trips</label>

                {
                    this.state.trips.map( trip => {
                        return (
                            <Link to={'/chat'} >
                                <div className="inbox-item" key={trip.id}>
                                    <span>
                                        Date: {trip.StartDate} - {trip.EndDate}
                                        <br></br>
                                        City: {trip.City} 
                                        <br></br>
                                        Guide: {trip.Guide}
                                        <br></br>
                                        Status: {trip.Status}
                                        <br></br>
                                        Contact with Guide: {}
                                        {/* <br></br>
                                        Number of Tourist: {trip.TouristCount} */}
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