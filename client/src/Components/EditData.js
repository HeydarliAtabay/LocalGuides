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
        this.saveData = this.saveData.bind(this);
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

    saveData (){
        //modify data after full implementation of login
        const data = {
                userId: 3,
                header: this.props.editData.header,
                text: this.state.input
            };
        API.editProfile(data)
            .then(() => {
                console.log('okay saved');
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
                            defaultValue={this.props.editData.data}
                            onChange={(e) => this.onChangeInput(e)}
                        />
                        <input type="text" 
                            placeholder={'surname...'}
                            className={'inputs'}
                            name="surname"
                            defaultValue={this.props.editData.data}
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
                            defaultValue={this.props.editData.data}
                            onChange={(e) => this.onChangeInput(e)}
                        />
                }

                {
                    this.props.editData.header === 'Birth date' && 
                        <input type="date" 
                            placeholder="Birth date"
                            className={'inputs'}
                            name="birthdate" 
                            defaultValue={this.props.editData.data}
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
                                        onChange={(e) => this.onChangeInput(e)}/>
                                <label htmlFor='male'>Male</label>
                            </span>
                            <span className={'gender'}>
                                <input type="radio" 
                                        name="gender" 
                                        id='female' 
                                        value="female" 
                                        onChange={(e) => this.onChangeInput(e)}/>
                                <label htmlFor='female'> Female</label>
                            </span>
                        </span>                    
                }   
                
                {
                    this.props.editData.header === 'Interests' && 
                        <span className={'interests-container'}>
                            <span>
                                <input type="checkbox" id="sport" name="Sport" onChange={(e) => this.onChangeInterests(e)}/>
                                <label htmlFor="sport"> Sport</label>
                            </span>

                            <span>
                                <input type="checkbox" id="museum" name="Museum" onChange={(e) => this.onChangeInterests(e)}/>
                                <label htmlFor="museum"> Museum</label>
                                
                            </span>
                            
                            <span>
                                <input type="checkbox" id="art" name="Art" onChange={(e) => this.onChangeInterests(e)}/>
                                <label htmlFor="art"> Art</label>
                            </span>
                            
                            <span>
                                <input type="checkbox" id="music" name="Music" onChange={(e) => this.onChangeInterests(e)}/>
                                <label htmlFor="music"> Music</label>
                            </span>
                            
                            <span>
                                <input type="checkbox" id="shopping" name="Shopping" onChange={(e) => this.onChangeInterests(e)}/>
                                <label htmlFor="shopping"> Shopping</label>
                            </span>
                            
                            <span>
                                <input type="checkbox" id="games" name="Games" onChange={(e) => this.onChangeInterests(e)}/>
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
                            onClick={() =>this.props.hide()}>
                        Cancel
                    </Button>
                </span>
            </div>
        );
    }
}

export default EditData;