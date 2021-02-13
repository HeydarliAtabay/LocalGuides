import React from 'react';
import API from '../API/APIuser.js';
import './CSS/EditData.css';
import {Button} from 'react-bootstrap';

class EditData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                input: {
                    name: '',
                    surname: '',
                    country: '',
                    birthdate: '',
                    gender: '',
                    interests: []
                }
            };
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onChangeInterests = this.onChangeInterests.bind(this);
        this.clearInput = this.clearInput.bind(this);
        this.setUser = this.setUser.bind(this);
        this.saveData = this.saveData.bind(this);
    }

    componentDidMount(){
            const interests = this.props.user.interests.split(', ');
            const input = {
                name : this.props.user.name,
                surname : this.props.user.surname,
                country : this.props.user.country,
                birthdate : this.props.user.birthdate,
                gender : this.props.user.gender,
                interests : interests
            }
            
            this.setState({input : input});
    }

    onChangeInput(event) {
        const name = event.target.name;
        const value = event.target.value;
        let input = Object.assign(this.state.input, { [name]: value }) ;

        this.setState({input: input});
    }

    onChangeInterests (e) {
        let interests = this.state.input.interests;
        if(e.target.checked) {
            if(!interests.some(elem => elem === e.target.name)) interests.push(e.target.name);
        } else {
            interests = interests.filter(element =>{ return element !== e.target.name })
        }

        let input = this.state.input;
        input.interests = interests;
        this.setState({input: input});
    }

    clearInput() {
        const input = {
            name: '',
            surname: '',
            country: '',
            birthdate: '',
            gender: '',
            interests: []
        }
        // this.setState({input: input});
    }

    setUser(){
        let user = Object.assign(this.props.user);
        
        user.country = this.state.input.country; 
        user.name = this.state.input.name; 
        user.surname = this.state.input.surname;
        user.birthdate = this.state.input.birthdate; 
        user.gender = this.state.input.gender; 
        user.interests = this.state.input.interests.join(', ');

        this.props.setUser(user);
    }

    saveData (){
        const data = {
                userId: this.props.user.id,
                header: this.props.editData.header,
                text: this.state.input
            };

        API.editProfile(data)
            .then(() => {
                this.setUser();
                this.clearInput();
                this.props.hide();

            }).catch(err => {
                console.log('error saving profile', err)
            });
    }
 
    render() {
        return (
            <div className={"edit-item"}>
                <label className={'lbl-header'}><b><i>{this.props.editData.header}</i></b></label>
                {
                    this.props.editData.header === 'Name & Surname' && 
                        <>
                        <input type="text" 
                            placeholder={'name...'}
                            className={'inputs'}
                            name="name"
                            defaultValue={this.state.input.name}
                            onChange={(e) => this.onChangeInput(e)}
                        />
                        <input type="text" 
                            placeholder={'surname...'}
                            defaultValue={this.props.user.surname}
                            className={'inputs'}
                            name="surname"
                            defaultValue={this.state.input.surname}
                            onChange={(e) => this.onChangeInput(e)}
                        />
                        </>
                }

                {
                    this.props.editData.header === 'Country' && 
                        <input type="text" 
                            placeholder={'country...'}
                            className={'inputs'}
                            name="country"
                            defaultValue={this.state.input.country}
                            onChange={(e) => this.onChangeInput(e)}
                        />
                }

                {
                    this.props.editData.header === 'Birth date' && 
                        <input type="date" 
                            placeholder="Birth date"
                            className={'inputs'}
                            name="birthdate" 
                            defaultValue={this.state.input.birthdate}
                            onChange={(e) => this.onChangeInput(e)}
                        />
                }

                {
                    this.props.editData.header === 'Gender' && 
                        <span className={'gender-container'}>
                            <span className={'gender'}>
                                <input type="radio" 
                                        name="gender" 
                                        id='male' 
                                        value="male" 
                                        checked={this.state.input.gender === 'male' ? true : false}  
                                        onChange={(e) => this.onChangeInput(e)}/>
                                <label htmlFor='male'>Male</label>
                            </span>
                            <span className={'gender'}>
                                <input type="radio" 
                                        name="gender" 
                                        id='female' 
                                        value="female" 
                                        checked={this.state.input.gender === 'female' ? true : false} 
                                        onChange={(e) => this.onChangeInput(e)}/>
                                <label htmlFor='female'> Female</label>
                            </span>
                        </span>                    
                }   
                
                {
                    this.props.editData.header === 'Interests' && 
                        <span className={'interests-container'}>
                            <span>
                                <input type="checkbox" 
                                        id="sport" 
                                        name="Sport" 
                                        checked={this.state.input.interests.some(i => i === 'Sport') ? true : false}
                                        onChange={(e) => this.onChangeInterests(e)}/>
                                <label htmlFor="sport"> Sport</label>
                            </span>

                            <span>
                                <input type="checkbox" 
                                        id="museum" 
                                        name="Museum" 
                                        checked={this.state.input.interests.some(i => i === 'Museum') ? true : false}
                                        onChange={(e) => this.onChangeInterests(e)}/>
                                <label htmlFor="museum"> Museum</label>
                                
                            </span>
                            
                            <span>
                                <input type="checkbox" 
                                        id="art" 
                                        name="Art" 
                                        checked={this.state.input.interests.some(i => i === 'Art') ? true : false}
                                        onChange={(e) => this.onChangeInterests(e)}/>
                                <label htmlFor="art"> Art</label>
                            </span>
                            
                            <span>
                                <input type="checkbox" 
                                        id="music" 
                                        name="Music" 
                                        checked={this.state.input.interests.some(i => i === 'Music') ? true : false}
                                        onChange={(e) => this.onChangeInterests(e)}/>
                                <label htmlFor="music"> Music</label>
                            </span>
                            
                            <span>
                                <input type="checkbox" 
                                        id="shopping" 
                                        name="Shopping" 
                                        checked={this.state.input.interests.some(i => i === 'Shopping') ? true : false}
                                        onChange={(e) => this.onChangeInterests(e)}/>
                                <label htmlFor="shopping"> Shopping</label>
                            </span>
                            
                            <span>
                                <input type="checkbox" 
                                        id="games" 
                                        name="Games" 
                                        checked={this.state.input.interests.some(i => i === 'Games') ? true : false}
                                        onChange={(e) => this.onChangeInterests(e)}/>
                                <label htmlFor="games"> Games</label>
                            </span>
                        </span>                    
                }  

                <span className='btn-group'>
                    <Button variant="success" 
                            className={'btn-edit mr-10'}
                            onClick={this.saveData}>
                        Save
                    </Button>
                    <Button variant="danger" 
                            className={'btn-edit'}
                            onClick={this.props.hide}>
                        Cancel
                    </Button>
                </span>
            </div>
        );
    }
}

export default EditData;