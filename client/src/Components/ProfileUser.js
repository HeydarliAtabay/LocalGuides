import React from 'react';
import EditData from './EditData';
import PhotoUploadWindow from './PhotoUploadWindow';
import './CSS/Profile.css';
import photo from '../assets/profile.jpg';

const camera = <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M5 5h-3v-1h3v1zm8 5c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm11-4v15h-24v-15h5.93c.669 0 1.293-.334 1.664-.891l1.406-2.109h8l1.406 2.109c.371.557.995.891 1.664.891h3.93zm-19 4c0-.552-.447-1-1-1-.553 0-1 .448-1 1s.447 1 1 1c.553 0 1-.448 1-1zm13 3c0-2.761-2.239-5-5-5s-5 2.239-5 5 2.239 5 5 5 5-2.239 5-5z"/></svg>;
const edit = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1.438 16.872l-1.438 7.128 7.127-1.438 12.642-12.64-5.69-5.69-12.641 12.64zm2.271 2.253l-.85-.849 11.141-11.125.849.849-11.14 11.125zm20.291-13.436l-2.817 2.819-5.69-5.691 2.816-2.817 5.691 5.689z"/></svg>;
const calendar = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z"/></svg>;

class ProfileUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                editData: {
                    header: undefined,
                    data: undefined
                },
                showUploadWindow: false
            }
        this.onShowUploadWindow = this.onShowUploadWindow.bind(this);
        this.onHideUploadWindow = this.onHideUploadWindow.bind(this);
        this.catchEdit = this.catchEdit.bind(this);
        this.hideEditBox = this.hideEditBox.bind(this);
    }

    onShowUploadWindow (){
        this.setState({showUploadWindow: true});
    }

    onHideUploadWindow (){
        this.setState({showUploadWindow: false});
    }

    handlePhoto = (src) =>{
        let user = Object.assign(this.props.user);
        user.photo = src;
        this.props.setUser(user);
    }

    catchEdit (header, data) {
        const editdata = {
                    header: header,
                    data: data
                }
        this.setState({editData: editdata});
    }

    hideEditBox (){
        const editdata = {
            header: undefined,
            data: undefined
        }
        this.setState({editData: editdata});
    }
 
    render() {
        return (
            <div className="profile">
                <div className="profile-photo">
                    <img alt="Profile" 
                        src={this.props.user.photo || photo} />
                    <label className={"camera"}
                            onClick={this.onShowUploadWindow} >
                        {camera}
                    </label>

                    <PhotoUploadWindow show={this.state.showUploadWindow}
                                        onHide={()=>this.onHideUploadWindow()}
                                        userId={this.props.user.id}
                                        handlePhoto={this.handlePhoto}
                        />
                    {
                        this.state.editData.header === 'Name & Surname' ? <EditData editData={this.state.editData} hide={this.hideEditBox} user={this.props.user} setUser={this.props.setUser}/> 
                        :
                        <p>
                            <i>{this.props.user.name + ' ' + this.props.user.surname} </i>
                            <label onClick={() => this.catchEdit('Name & Surname')}>{edit}</label>
                        </p>
                    }
                    
                </div>
                <div className="profile-data">
                    
                    {
                        this.state.editData.header === 'Country' ? <EditData editData={this.state.editData} hide={this.hideEditBox} user={this.props.user} setUser={this.props.setUser}/> 
                        :
                        <div className={"profile-data-item"}>
                            <label><b><i>Country</i></b></label>
                            <input type="text" 
                                placeholder={this.props.user.country}
                                disabled={true}
                                />
                            <span onClick={() => this.catchEdit('Country')}>
                                {edit}
                            </span>
                        </div>
                    }

                    {
                        this.state.editData.header === 'Birth date' ? <EditData editData={this.state.editData} hide={this.hideEditBox} user={this.props.user} setUser={this.props.setUser}/> 
                        :
                        <div className={"profile-data-item"}>
                            <label><b><i>Birth date</i></b></label>
                            <input type="date" 
                                placeholder="Birth date"
                                defaultValue={this.props.user.birthdate}
                                disabled={true}
                                />
                            <span onClick={() => this.catchEdit('Birth date')}>
                                {calendar}
                            </span>
                        </div>
                    }
                    
                    {
                        this.state.editData.header === 'Gender' ? <EditData editData={this.state.editData} hide={this.hideEditBox} user={this.props.user} setUser={this.props.setUser}/> 
                        :
                        <div className={"profile-data-item"}>
                            <label><b><i>Gender</i></b></label>
                            <input type="text" 
                                placeholder={this.props.user.gender}
                                disabled={true}
                                />
                            <span onClick={() => this.catchEdit('Gender')}>
                                {edit}
                            </span>
                        </div>
                    }
                    
                    {
                        this.state.editData.header === 'Interests' ? <EditData editData={this.state.editData} hide={this.hideEditBox} user={this.props.user} setUser={this.props.setUser}/> 
                        :
                        <div className={"profile-data-item"}>
                            <label><b><i>Interests</i></b></label>
                            <textarea className={"interest"} 
                                        cols={30} rows={2}
                                        disabled={true}
                            >
                                {this.props.user.interests}
                                
                            </textarea>
                            <span id="interest" onClick={() => this.catchEdit('Interests')}>
                                {edit}
                            </span>
                        </div>
                    }
                    
                </div>
            </div>
        );
    }
}

export default ProfileUser;