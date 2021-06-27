import React from 'react';
import API from '../API/APIuser.js';
import ChatMessageBox from './ChatMessageBox.js';
import './CSS/Chat.css';
import { Button } from 'react-bootstrap';
import photo from '../assets/profile.jpg';
import { Link } from 'react-router-dom';

const backbutton = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chat: [],
            user: {
                id : undefined,
                chatId: '',
                userPhoto: undefined,
                opponentPhoto: undefined, 
                opponentId: undefined,
                opponentName: ''
            }
        }
    }

    componentDidMount(){

        const opponentName = this.props.chat.name + ' ' + this.props.chat.surname;
        const opponentId = this.props.chat.sender === this.props.user.id ? this.props.chat.reciever : this.props.chat.sender; 
        const user = {
            id : this.props.user.id,
            chatId: this.props.chat.chatId,
            userPhoto: this.props.user.photo,
            opponentPhoto: this.props.chat.photo, 
            opponentId: opponentId,
            opponentName: opponentName
        }

        this.setState({user: user})
       
        API.getSingleChat(this.props.chat.chatId)
            .then((chat) => {
                this.setState({chat: chat});
            }).catch((err) => {
                console.log(err);
            })
    }
 
    render() {
        return (
            <div className="chat-page">

                <div className="chat-title">
                    <span>
                        <Link to="/inbox" >{backbutton}</Link>
                    </span>
                    <label className="partner-name">
                        <Link to="/guide">
                            { this.state.user.opponentName }
                        </Link>
                        
                    </label>
                </div>

                <div className="chat-box">
                    {
                        this.state.chat.map( (message, i) => {
                            return (<>
                                {
                                    message.sender === this.state.user.id ? 
                                        <span className={"right-message"} key={i}>
                                            <label>
                                                { message.message }
                                            </label>
                                            <img alt="Profile" src={this.state.user.userPhoto ? this.state.user.userPhoto : photo} />
                                        </span>
                                    :
                                        <span className="left-message" key={i}>
                                            <img alt="Profile" src={this.state.user.opponentPhoto ? this.state.user.opponentPhoto : photo} />
                                            <label>
                                                {message.message} 
                                            </label>
                                        </span>
                                }
                           </>)
                        })
                    }

                    <ChatMessageBox user={this.state.user} />
                </div>
            </div>
        );
    }
}

export default Chat;