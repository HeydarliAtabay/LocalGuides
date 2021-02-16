import React from 'react';
import API from '../API/APIuser';
// import EditData from './EditData';
// import PhotoUploadWindow from './PhotoUploadWindow';
import './CSS/Profile.css';
import photo from '../assets/profile.jpg';
import {FaStar} from 'react-icons/fa'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// const camera = <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M5 5h-3v-1h3v1zm8 5c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm11-4v15h-24v-15h5.93c.669 0 1.293-.334 1.664-.891l1.406-2.109h8l1.406 2.109c.371.557.995.891 1.664.891h3.93zm-19 4c0-.552-.447-1-1-1-.553 0-1 .448-1 1s.447 1 1 1c.553 0 1-.448 1-1zm13 3c0-2.761-2.239-5-5-5s-5 2.239-5 5 2.239 5 5 5 5-2.239 5-5z"/></svg>;
// const edit = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1.438 16.872l-1.438 7.128 7.127-1.438 12.642-12.64-5.69-5.69-12.641 12.64zm2.271 2.253l-.85-.849 11.141-11.125.849.849-11.14 11.125zm20.291-13.436l-2.817 2.819-5.69-5.691 2.816-2.817 5.691 5.689z"/></svg>;
// const calendar = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z"/></svg>;
const contact = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/></svg>;
const select = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 11c2.761.575 6.312 1.688 9 3.438 3.157-4.23 8.828-8.187 15-11.438-5.861 5.775-10.711 12.328-14 18.917-2.651-3.766-5.547-7.271-10-10.917z"/></svg>;


class ProfileGuide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                guide: {
                    id: undefined,
                    photo: undefined,
                    rating: 0,
                    name: undefined,
                    surname: undefined,
                    age: undefined,
                    gender: undefined,
                    language: undefined
                }
            }
    }

    componentDidMount(){

        
        API.getGuide(this.props.guide)
            .then((guide) => {
                guide.price = guide.price + ' €/hr';

                var today = new Date();
                var birthDate = new Date(guide.birthdate);
                var age = today.getFullYear() - birthDate.getFullYear();
                guide.age = age;
                guide.rating = parseInt(guide.rating);
                guide.language = guide.language.join(', ');
                this.setState({guide: guide});
                
            }).catch((error) => {
                console.error(error);
            })
    }

    contact = () =>{
        const chat = {
            chatId: 'chat-' + this.state.guide.id,
            opponentPhoto: this.state.guide.photo,
            opponentId: this.state.guide.id,
            name: this.state.guide.name,
            surname: this.state.guide.surname,
            sender: this.props.user.id,
            reciever: this.state.guide.id
        }

        this.props.setChat(chat);
    }
    
 
    render() {
        return (
            <div className="profile">
                <div className="profile-photo">
                    <img alt="Profile" 
                        src={this.state.guide.photo || photo} />

                        <p>
                            <i>{this.state.guide.name + ' ' + this.state.guide.surname} </i>
                            <span className="online">{'......'}</span>
                        </p>

                        <span>
                            <Link to="/chat" >
                                <Button variant="light" className={"btn-guide"} onClick={() =>this.contact()}>{contact} Contact</Button>
                            </Link>
                            <Link to="/create">
                                <Button variant="light" className={"btn-guide ml-20"}>{select} Request trip</Button>
                            </Link>
                        </span>
                    
                </div>
                <div className="profile-data">

                        <div className={"profile-data-item"}>
                            <label><b><i>Guide Rating</i></b></label>
                            <p className="rating">
                                {[...Array(this.state.guide.rating)].map(star =>{
                                    return  <FaStar size={30} color="#ffc107"/>
                                })}
                                {[...Array(5-this.state.guide.rating)].map(star =>{
                                    return  <FaStar size ={30} color="#808080"/>
                                })}
                            </p>
                            
                        </div>

                        <div className={"profile-data-item"}>
                            <label><b><i>Price</i></b></label>
                            <input type="text" 
                                defaultValue={this.state.guide.price}
                                disabled={true}
                                />
                        </div>

                        <div className={"profile-data-item"}>
                            <label><b><i>Age</i></b></label>
                            <input type="text" 
                                defaultValue={this.state.guide.age}
                                disabled={true}
                                />
                        </div>

                        <div className={"profile-data-item"}>
                            <label><b><i>Gender</i></b></label>
                            <input type="text" 
                                placeholder={this.state.guide.gender}
                                disabled={true}
                                />
                        </div>

                        <div className={"profile-data-item"}>
                            <label><b><i>Languages</i></b></label>
                            <textarea className={"interest"} 
                                        cols={30} rows={2}
                                        disabled={true}
                                        defaultValue={this.state.guide.language}
                            >                                
                            </textarea>                           
                        </div>
                    
                </div>
            </div>
        );
    }
}

export default ProfileGuide;