import React from 'react';
import './CSS/login.css'
import { Link } from "react-router-dom";


class Login extends React.Component{
  render(){
    return(
      <div id="loginform">
        <FormHeader title="Login" />
        <Form />
      </div>
    )
  }
}

const FormHeader = props => (
    <h2 id="headerTitle">{props.title}</h2>
);

const Form = props => (
   <div>
     <FormInput description="Username" placeholder="Enter your username" type="text" />
     <FormInput description="Password" placeholder="Enter your password" type="password"/>
     <Link style={{ color: 'inherit', textDecoration: 'inherit'}} className="Nav__link" to="/main">

     <FormButton title="Log in"/>
     </Link>

   </div>
);

const FormButton = props => (
  <div id="buttonLogin" class="row">
    <button >{props.title}</button>
  </div>
);

const FormInput = props => (
  <div class="row">
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder}/>
  </div>  
);
export default Login;