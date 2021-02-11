import React from 'react';
import API from '../API/APIuser.js';
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
        // modify user id for input after login
        API.getChats(3)
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
                        )
                    })
                }

                {/* <div className="inbox-item">
                    <img alt="Profile" src={photo} />
                    <span>
                        <label className={"sender-name"}>
                            &nbsp;Name Surname
                        </label>
                        <label className={"message"}>
                            &nbsp;Buongiorno
                        </label>
                    </span>
                </div>
                <div className="inbox-item">
                    <img alt="Profile" src={photo} />
                    <span>
                        <label className={"sender-name"}>
                            &nbsp;Name Surname
                        </label>
                        <label className={"message"}>
                            &nbsp;Hii
                        </label>
                    </span>
                </div>             */}
                
            </div>
        );
    }
}

export default Inbox;