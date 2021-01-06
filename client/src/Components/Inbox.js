import React from 'react';
import './CSS/Inbox.css';
import photo from '../assets/profile.jpg';


class Inbox extends React.Component {
    constructor(props) {
        super(props);
    }
 
    render() {
        return (
            <div className="inbox">

                <label className="header">Inbox</label>

                <div className="inbox-item">
                    <img alt="Profile" src={photo} />
                    <span>
                        <label className={"sender-name"}>
                            &nbsp;Name Surname
                        </label>
                        <label className={"message"}>
                            &nbsp;Good evening. I am ...
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
                </div>            
                
            </div>
        );
    }
}

export default Inbox;