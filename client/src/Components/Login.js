import React from 'react';
import './CSS/login.css'
import {Link} from "react-router-dom";
import API from '../API/APIuser.js';
import MainPage from './MainPage'
import Sidebar from './Sidebar';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      user: null,
      submitted: false,
      authErr: null
    }
    this.login=this.login.bind(this);
  }

  onChangeUsername = (event) => {
    this.setState({username: event.target.value});
  };

  //login
  login (username){
    API.userLogin(username).then((user) => {
        // this.setState({user: user, submitted: true})
              this.props.setUser(user);

      })
      .catch((err) => {
        this.setState({authErr: err.msg, submitted: true});
      });

  }

  // logout logout = () => {   API.userLogout().then(() => {
  // this.setState({authUser: null,authErr: null, tasks: null});
  // history.push('/teacherLogin');     window.location.reload(false);   },() => {
  //     this.setState({       authErr:'Error occured while logging out. Please
  // try again.'     }); }   ); }

  render() {

    // if (this.props.submitted && this.props.authErr === null) {
    //   return <>
    //   <MainPage user={this.props.getStudentName} /> 
    //   <Sidebar user={this.props.getStudentName} /> 
    //   </>
    // }

    return (
      <div id="loginform">
        <h2 id="headerTitle">Login</h2>

        <div>
          <div class="row">
            <label>Username</label>
            <input description="Username" value={this.state.username}
             onChange={(ev) => this.onChangeUsername(ev)}
        type="text" placeholder="Enter your username"
          />
          </div>
        </div>

        {/* <Link
          style={{
          color: 'inherit',
          textDecoration: 'inherit'
        }}
          className="Nav__link"
          > */}
          <div id="buttonLogin" class="row">
            <button onClick={()=>{this.login(this.state.username)}} >Log in</button>
          </div>
        {/* </Link> */}
      </div>
    )
  }
}

export default Login;