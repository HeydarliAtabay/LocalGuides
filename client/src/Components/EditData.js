import React from 'react';
import './CSS/EditData.css';
import {Button} from 'react-bootstrap';

class EditData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {input: undefined};
        this.onChangeInput = this.onChangeInput.bind(this);
        this.saveData = this.saveData.bind(this);
    }

    onChangeInput(event) {
        this.setState({input: event.target.value});
    }

    saveData (){
        console.log("Data Saved");
    }
 
    render() {
        return (
            <div className={"edit-item"}>
                <label className={'lbl-header'}><b><i>{this.props.editData.header}</i></b></label>
                {
                    (this.props.editData.header === 'Country' || 
                        this.props.editData.header === 'Name & Surname') && 
                        <input type="text" 
                            placeholder={'type...'}
                            className={'inputs'}
                            defaultValue={this.props.editData.data}
                            onChange={(e) => this.onChangeInput(e)}
                        />
                }

                {
                    this.props.editData.header === 'Birth date' && 
                        <input type="date" 
                            placeholder="Birth date"
                            className={'inputs'}
                            defaultValue={this.props.editData.data}
                            onChange={(e) => this.onChangeInput(e)}
                        />
                }

                {
                    this.props.editData.header === 'Gender' && 
                        <span className={'gender-container'}>
                            <span className={'gender'}>
                                <input type="radio" name="gender" id='male' value="male"/>
                                <label htmlFor='male'>Male</label>
                            </span>
                            <span className={'gender'}>
                                <input type="radio" name="gender" id='female' value="female"/>
                                <label htmlFor='female'> Female</label>
                            </span>
                        </span>                    
                }   
                
                {
                    this.props.editData.header === 'Interests' && 
                        <span className={'interests-container'}>
                            <span>
                                <input type="checkbox" id="sport" name="sport"/>
                                <label htmlFor="sport"> Sport</label>
                            </span>

                            <span>
                                <input type="checkbox" id="museum" name="museum"/>
                                <label htmlFor="museum"> Museum</label>
                                
                            </span>
                            
                            <span>
                                <input type="checkbox" id="art" name="art"/>
                                <label htmlFor="art"> Art</label>
                            </span>
                            
                            <span>
                                <input type="checkbox" id="music" name="music"/>
                                <label htmlFor="music"> Music</label>
                            </span>
                            
                            <span>
                                <input type="checkbox" id="shopping" name="shopping"/>
                                <label htmlFor="shopping"> Shopping</label>
                            </span>
                            
                            <span>
                                <input type="checkbox" id="games" name="games"/>
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