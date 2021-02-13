import React from 'react';
import API from '../API/APIuser.js';
import { Link } from 'react-router-dom';
import './CSS/Inbox.css';
import photo from '../assets/profile.jpg';


class Inbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chats: []
        }
    }

    componentDidMount(){

        API.getChats(this.props.user.id)
            .then((chats) => {
                this.setState({chats: chats});
            }).catch((err) => {
                console.log(err);
            })
    }
 
    render() {
        return (
            <div className="inbox">

                <label className="header">Inbox</label>

                {
                    this.state.chats.map( chat => {
                        return (
                            <Link to={'/chat'} onClick={() =>this.props.setChat(chat)}>
                                <div className="inbox-item" key={chat.chatId}>
                                    <img alt="Profile" 
                                            src={chat.photo !== null ? chat.photo : photo} 
                                        />
                                    <span>
                                        <label className={"sender-name"}>
                                            &nbsp;{chat.name + ' ' + chat.surname}
                                        </label>
                                        <label className={"message"}>
                                            &nbsp;{chat.message}
                                        </label>
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

export default Inbox;