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
                <label><b><i>{this.props.editData.header}</i></b></label>
                {
                    (this.props.editData.header === 'Country' || 
                        this.props.editData.header === 'Name & Surname') && 
                        <input type="text" 
                            placeholder={'type...'}
                            defaultValue={this.props.editData.data}
                            onChange={(e) => this.onChangeInput(e)}
                        />
                }

                {
                    this.props.editData.header === 'Birth date' && 
                        <input type="date" 
                            placeholder="Birth date"
                            defaultValue={this.props.editData.data}
                            onChange={(e) => this.onChangeInput(e)}
                        />
                }

                {
                    this.props.editData.header === 'Gender' && 
                        <>  
                            <input type="radio" name="gender" id='male' value="male"/>
                            <label htmlFor='male'>Male</label>
                            <input type="radio" name="gender" id='female' value="female"/>
                            <label htmlFor='female'>Female</label>
                        </>
                }   
                

                <span>
                    <Button variant="success" 
                            className={'btn-edit mr-10'}
                            onClick={this.saveData}>
                        Save
                    </Button>
                    <Button variant="danger" className={'btn-edit'}>Cancel</Button>
                </span>
            </div>
        );
    }
}

export default EditData;