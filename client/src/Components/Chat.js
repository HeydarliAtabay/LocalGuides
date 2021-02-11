import React from 'react';
import API from '../API/APIuser.js';
import './CSS/Chat.css';
import { Button } from 'react-bootstrap';
import photo from '../assets/profile.jpg';

const backbutton = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>;
const send = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z"/></svg>;

class Chat extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     // chats: []
        // }
    }

    componentDidMount(){
        // // modify user id for input after login
        // API.getChats(3)
        //     .then((chats) => {
        //         this.setState({chats: chats});
        //     }).catch((err) => {
        //         console.log(err);
        //     })
    }
 
    render() {
        return (
            <div className="chat-page">

                <div className="chat-title">
                    <span>{backbutton}</span>
                    <label className="partner-name">Name Surname</label>
                </div>

                <div className="chat-box">
                    <span className="right-message">
                        <label>
                            Hello...
                        </label>
                        <img alt="Profile" src={photo} />
                    </span>
                    <span className="left-message">
                        <img alt="Profile" src={photo} />
                        <label>
                            Hii 
                        </label>
                    </span>
                </div>
               
                <span className="type-message">
                    <input type="text" placeholder="type message" />
                    <label>{send}</label>
                </span>
            </div>
        );
    }
}

export default Chat;