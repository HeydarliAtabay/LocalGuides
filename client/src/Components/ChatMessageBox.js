import React from "react";

import useChat from "../useChat";
import photo from '../assets/profile.jpg';

const send = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z"/></svg>;


const ChatMessageBox = (props) => {
  // const { chatId } = props.user.chatId;
  const { messages, sendMessage } = useChat(props.user.chatId, props.user);
  const [newMessage, setNewMessage] = React.useState("");

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage, props.user);
    setNewMessage("");
  };

  return (
      <>
        {
            messages.map((message, i) => (
            <>
              {
                message.ownedByCurrentUser ? 
                  <span className={"right-message"} key={i}>
                      <label>
                          { message.body }
                      </label>
                      <img alt="Profile" src={props.user.userPhoto ? props.user.userPhoto : photo} />
                  </span>
                : 
                <span className="left-message" key={i}>
                    <img alt="Profile" src={props.user.opponentPhoto ? props.user.opponentPhoto : photo} />
                    <label>
                        {message.body} 
                    </label>
                </span>
              }
            </>
        ))}
   
        <span className="type-message">
            <input type="text" placeholder="type message" value={newMessage} onChange={handleNewMessageChange}/>
            <label onClick={handleSendMessage}>{send}</label>
        </span>
      </> 
  );
};

export default ChatMessageBox;
