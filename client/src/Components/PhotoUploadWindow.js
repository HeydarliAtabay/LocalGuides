import React from 'react';
import { Button, Modal, Image } from 'react-bootstrap';
import './CSS/PhotoUpload.css';

const uploadIcon = <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path d="M10 18v-10h-2.51l4.51-5.01 4.51 5.01h-2.51v10h-4zm-2 2h8v-10h5l-9-10-9 10h5v10zm11-1v3h-14v-3h-2v5h18v-5h-2z"/></svg>;
const reupload = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 12l-4.463 4.969-4.537-4.969h3c0-4.97 4.03-9 9-9 2.395 0 4.565.942 6.179 2.468l-2.004 2.231c-1.081-1.05-2.553-1.699-4.175-1.699-3.309 0-6 2.691-6 6h3zm10.463-4.969l-4.463 4.969h3c0 3.309-2.691 6-6 6-1.623 0-3.094-.65-4.175-1.699l-2.004 2.231c1.613 1.526 3.784 2.468 6.179 2.468 4.97 0 9-4.03 9-9h3l-4.537-4.969z"/></svg>;

class PhotoUploadWindow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedPhoto: undefined, 
            src: undefined
        }

        this.onPhotoChange = this.onPhotoChange.bind(this);
        this.onPhotoUpload = this.onPhotoUpload.bind(this);
    }

    onPhotoChange (e){
        const photo = e.target.files[0];
        const src = URL.createObjectURL(photo);
        this.setState({selectedPhoto: photo, src: src});
    }

    onPhotoUpload (){
        //create obj of form data
        const formData = new FormData();

        //upload photo to form data
        formData.append(
                'photo',
                this.state.selectedPhoto,
                this.state.selectedPhoto.name
            );

        console.log('obj: ',formData);
        console.log('name: ', this.state.selectedPhoto.name);
        console.log('type: ', this.state.selectedPhoto.type);

    }

    render () {
        return (
            <Modal {...this.props} size="md"
                aria-labelledby="verify" centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="photoUpload">
                        Upload...
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        this.state.selectedPhoto && <span className="image" >
                            <Image src={this.state.src} rounded />
                        </span>
                        
                    }

                    <span className="lbl-upload">
                        <input type="file" id="photo" onChange={this.onPhotoChange} accept="image/*"/>
                        <label htmlFor="photo" className={this.state.selectedPhoto ? 'lbl-mini' : 'lbl-max'}>
                            {this.state.selectedPhoto ? reupload : uploadIcon} 
                            {this.state.selectedPhoto ? ' Reupload' : ' Upload'}
                        </label>
                    </span>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-danger" onClick={this.props.onHide}>Close</Button>
                    <Button className={'btn-outline'} onClick={this.props.confirm}>Upload</Button>
                </Modal.Footer>
            </Modal>
        );
    }
    
}

export default PhotoUploadWindow;