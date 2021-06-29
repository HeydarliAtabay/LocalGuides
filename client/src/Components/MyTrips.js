import React from 'react';
import API from '../API/APIuser.js';
import { Link } from 'react-router-dom';
import { Button, Form} from 'react-bootstrap';
import Modal  from 'react-bootstrap/Modal';

import './CSS/MyTrips.css';
import photo from '../assets/profile.jpg';
import ReactStars from "react-rating-stars-component";



const loc = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>;
const startDate = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M17 3v-2c0-.552.447-1 1-1s1 .448 1 1v2c0 .552-.447 1-1 1s-1-.448-1-1zm-12 1c.553 0 1-.448 1-1v-2c0-.552-.447-1-1-1-.553 0-1 .448-1 1v2c0 .552.447 1 1 1zm13 13v-3h-1v4h3v-1h-2zm-5 .5c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5-4.5 2.019-4.5 4.5zm11 0c0 3.59-2.91 6.5-6.5 6.5s-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5zm-14.237 3.5h-7.763v-13h19v1.763c.727.33 1.399.757 2 1.268v-9.031h-3v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-9v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-3v21h11.031c-.511-.601-.938-1.273-1.268-2z"/></svg>;
const endDate = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M24 2v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2zm1 11.729l.855-.791c1 .484 1.635.852 2.76 1.654 2.113-2.399 3.511-3.616 6.106-5.231l.279.64c-2.141 1.869-3.709 3.949-5.967 7.999-1.393-1.64-2.322-2.686-4.033-4.271z"/></svg>;
const guide = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 26"><path d="M16.5 14.5c0 .828-.56 1.5-1.25 1.5s-1.25-.672-1.25-1.5.56-1.5 1.25-1.5 1.25.672 1.25 1.5zm-7.75-1.5c-.69 0-1.25.672-1.25 1.5s.56 1.5 1.25 1.5 1.25-.672 1.25-1.5-.56-1.5-1.25-1.5zm3.25 8.354c2.235 0 3-2.354 3-2.354h-6s.847 2.354 3 2.354zm12-6.041c0 1.765-.985 3.991-3.138 4.906-2.025 3.233-4.824 5.781-8.862 5.781-3.826 0-6.837-2.548-8.862-5.781-2.153-.916-3.138-3.142-3.138-4.906 0-2.053.862-3.8 2.71-3.964.852-9.099 8.57-8.408 9.837-10.849.323.559.477 1.571-.02 2.286.873-.045 2.344-1.304 2.755-2.552.754.366 1.033 1.577.656 2.354.542-.103 2.187-1.15 3.062-2.588.688 1.563.026 3.563-.708 4.771l-.012.001c1.796 1.707 2.781 4.129 3.01 6.576 1.859.165 2.71 1.917 2.71 3.965zm-2.58-1.866c-.235-.152-.531-.115-.672-.053-.56.25-1.214-.062-1.372-.66l-.001.016c-.333-2.604-1.125-4.854-2.611-5.565-6.427 7.009-10.82-.914-11.94 3.529-.101.582-.166 1.172-.166 1.766 0 .719-.743 1.209-1.406.914-.14-.062-.437-.1-.672.053-1 .651-.894 4.184 1.554 5.012.224.076.413.228.535.43 2.447 4.053 5.225 5.111 7.331 5.111 3.288 0 5.615-2.269 7.332-5.111.122-.202.312-.354.535-.43 2.447-.828 2.553-4.361 1.553-5.012z"/></svg>;
const bell = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M22.656 6.383c-.216-.817.023-1.696.627-2.298l.003-.003c.475-.474.714-1.095.714-1.712 0-1.305-1.051-2.37-2.37-2.37-.618 0-1.239.238-1.714.712l-.002.003c-.604.604-1.48.844-2.299.626-5.93-1.57-11.011 7.819-16.211 5.179l-1.404 1.406 16.073 16.074 1.405-1.406c-2.64-5.198 6.751-10.28 5.178-16.211zm-.154-4.887c.444.443.444 1.165 0 1.608-.443.443-1.163.442-1.606-.001s-.444-1.164 0-1.606c.443-.444 1.164-.444 1.606-.001zm-11.731 20.504c-.646.646-1.535 1-2.422 1-.874 0-1.746-.346-2.376-.976-1.27-1.27-1.308-3.563-.024-4.846l4.822 4.822z"/></svg>;
const contact = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/></svg>;
const rate = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379 4.246-3.611-2.625-3.612 2.625 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388 7.416 5.388-2.833-8.718 7.417-5.389h-9.167l-2.833-8.718z"/></svg>


class MyTrips extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trips: [],
            show: false,
            comment: "",
            rating: 0 
        }
    }

    componentDidMount(){
        API.getMyTrips(this.props.user.id)
            .then((myTrips) => {
                this.setState({trips: myTrips});

            }).catch((err) => {
                console.log(err);
            })
    }

    contact = (n) =>{
        const chat = {
            chatId: 'chat-' + this.state.trips[n].id,
            opponentPhoto: this.state.trips[n].photo,
            opponentId: this.state.trips[n].id,
            name: this.state.trips[n].name,
            surname: this.state.trips[n].surname,
            sender: this.props.user.id,
            reciever: this.state.trips[n].id
        }

        this.props.setChat(chat);
    }

    modalDisplay = () => {
        this.setState({show: false});
    }

    onChangeComment =(ev)=>{
        this.setState({comment: ev})
    }

    onAddComment =(rating, comment, guideId, user )=>{
        const ratings={user_id: user, guide_id:guideId, rating:rating, comment:comment}
        API.addRating(ratings)
      .then(() => {
          // this.setState({trips: myTrips});

      }).catch((err) => {
          console.log(err);
      })
      this.modalDisplay();


    }

     ratingChanged = (newRating) => {
         this.setState({rating: newRating})
        console.log(newRating);
      };

 
    render() {
        
        return (
            
            <div className="trips">
                <label className="header">Trip requests</label>

                {
                    this.state.trips.map( (trip, i) => {
                        return (
                            // <Link >
                                <div className="trips-item" key={trip.id}>
                                    <span>
                                        <h5><i> My trip</i></h5>
                                        <div className="itemHead">{loc}<b> City: </b>{trip.City}</div> 
                                        {/* <div className="itemDet"></div> */}
                                        {/* <br></br> */}
                                        <div className="itemHead">{startDate}<b> Start Date: </b>{new Date(trip.StartDate).toISOString().slice(0,10)}</div>
                                         {/* <div className="itemDet"></div>   */}
                                        {/* <br></br> */}
                                        <div className="itemHead">{endDate}<b> End Date: </b>{new Date(trip.EndDate).toISOString().slice(0,10)}</div>
                                         {/* <div className="itemDet"></div>  */}
                                        {/* <br></br> */}
                                        <div className="itemHead">{guide}<b> Guide: </b>{trip.name} {trip.surname}</div>
                                         {/* <div className="itemDet"></div> */}
                                        {/* <br></br> */}
                                        <div className="itemHead">{bell}<b> Status: </b>{trip.Status}</div>
                                         {/* <div className="itemDet"></div>  */}
                                    </span>

                                    {
                                        trip.Status === 'accepted' && 
                                        <Link to="/chat" >
                                            <Button variant="light" className={"btn-guide"} onClick={() =>this.contact(i)}>{contact} Contact guide</Button>
                                        </Link>
                                    }

                                    {


                                        trip.Status === 'finished' &&
                                        <>
                                            <Button variant="light" className={"btn-guide"} onClick={() =>this.setState({show: true})}>{rate}  Rate guide </Button>
                                            <Isfendiyar rating={this.state.rating} rate={(e)=>this.ratingChanged(e)} show={this.state.show} onClose={()=>this.modalDisplay()} onComment={(e)=>this.onChangeComment(e)} comment={this.state.comment} guideId={this.state.trips[i].Guide} userId={this.state.trips[i].user} onAdd={this.onAddComment}/> 
                                            </>
                                    }

                                </div>
                            // </Link>
                        )
                    })
                }                
            </div>
        );
    }
}






function Isfendiyar(props){
    
    return(
        <Modal {...props} centered>
        <Modal.Header>
          <Modal.Title>Rate the Guide </Modal.Title>
        </Modal.Header>
          <Modal.Body>
            Rate:
          <ReactStars
          onChange={(ev)=>props.rate(ev)}
          count={5}
          size={24}
          isHalf={false}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700"
        />
        <Form.Group>
        <Form.Label> Comment: </Form.Label>
        <Form.Control
        type="text"
        value={props.comment}
        onChange={(ev)=>props.onComment(ev.target.value)}
        >
                </Form.Control>
        </Form.Group>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary"  onClick={props.onClose} >
              Cancel
            </Button>
            <Button variant="primary" type="submit" onClick={()=>props.onAdd(props.rating, props.comment, props.guideId, props.userId)}>
              Rate
            </Button>
          </Modal.Footer>
      </Modal>
    )
}

export default MyTrips;


