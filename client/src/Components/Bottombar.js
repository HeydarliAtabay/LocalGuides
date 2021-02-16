import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
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

    <div className="button ml-20">
    <Link className="Nav__link" to="/main">
      <Button id="btn" variant="outline-dark" block>
        <img src={Jumbotron} alt="my image" />
      </Button>
      </Link>
    </div>
    <div className="button">
    <Link  className="Nav__link" to="/inbox">
    <Button id="btn" variant="outline-dark" block>
        <img src={Jumbotron1} alt="my image" />
      </Button>
      </Link>
    </div>

    <div className="button">
    <Link className="Nav__link" to="/user">
    <Button id="btn" variant="outline-dark" block>
        <img src={Jumbotron2} alt="my image" />
      </Button>
      </Link>
    </div>

    <div className="button">
    <Link className="Nav__link" to="/trips">
      <Button id="btn" variant="outline-dark" block>
        <img src={Jumbotron3} alt="my image" />
      </Button>
      </Link>
    </div>

  </div> 
  </>
    );
}

export default Bottombar;