import React, {Component} from 'react';
import {Navbar, Button} from 'react-bootstrap';
import './CSS/Bottombar.css'
import Jumbotron from "../assets/main.png";
import Jumbotron1 from "../assets/inbox.png";
import Jumbotron2 from "../assets/profile.png";
import Jumbotron3 from "../assets/myTours.png";
import Jumbotron4 from "../assets/logout.png";
import Jumbotron5 from "../assets/logout1.png";

import { Link } from "react-router-dom";

function Bottombar(props) {
  return ( <> <div class="navbar">

    <div id="button">
    <Link style={{ color: 'inherit', textDecoration: 'inherit'}} className="Nav__link" to="/main">
      <Button id="btn" variant="outline-dark" block>
        <img style={{
          height: "2rem",
          float: "left",
        }} src={Jumbotron} alt="my image" 
      />
        {/* <h4 id="text">Home</h4> */}
      </Button>
      </Link>
    </div>
    <div id="button">
    <Link style={{ color: 'inherit', textDecoration: 'inherit'}} className="Nav__link" to="/inbox">
    <Button id="btn" variant="outline-dark" block>
        <img style={{
          height: "2rem",
          float: "left",
          margin: "3px"
        }} src={Jumbotron1} alt="my image" 
        // onClick={this.routeAddCor }}
      />
        {/* <h4 id="text">Inbox</h4> */}
      </Button>
      </Link>
    </div>

    <div id="button">
    <Link style={{ color: 'inherit', textDecoration: 'inherit'}} className="Nav__link" to="/user">
    <Button id="btn" variant="outline-dark" block>
        <img style={{
          height: "2rem",
          float: "left",
          margin: "3px"
        }} src={Jumbotron2} alt="my image" 
        // onClick={this.routeAddCor }}
      />
        {/* <h4 id="text">Profile</h4> */}
      </Button>
      </Link>
    </div>

    <div id="button">
    <Link style={{ color: 'inherit', textDecoration: 'inherit'}} className="Nav__link" to="/main">
      <Button id="btn" variant="outline-dark" block>
        <img style={{
          height: "2rem",
          float: "left",
          margin: "3px"
        }} src={Jumbotron3} alt="my image" 
        // onClick={this.routeAddCor }}
      />
        {/* <h4 id="text">My Trips</h4> */}
      </Button>
      </Link>
    </div>

    <div id="buttonLogout">
    <Link style={{ color: 'inherit', textDecoration: 'inherit'}} className="Nav__link" to="/">
      <Button 
      onClick={()=>props.setUser(null)} id="btn"  variant="outline-dark" >
        <img style={{
          height: "1.3rem",
          float: "right",
        }} src={Jumbotron5} alt="my image" 
      />
      </Button>
      </Link>
    </div>

  </div> 
  </>
    );
}

export default Bottombar;