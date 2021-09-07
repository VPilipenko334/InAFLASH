import React from "react";
import { Redirect } from "react-router";

class UploadPicture extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            title: "",
            description: "",
            privacy: "",
            userId: this.props.currentUserId,
            redirect: false, 
            pictureFile: null, 
            pictureUrl: null,
            tError: false, 
            selectForm: 0,
        }

        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleFile(e) {
        const file = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ pictureFile: file, photoUrl: fileReader.result, selectForm: 1 });
        }

        if (file) {
            fileReader.readAsDataURL(file);
        } else {
            this.setState({ imageUrl: "", imageFile: null });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        // debugger
        // console.log(this.state)
        if (this.state.tError === false) {
            const formData = new FormData();
            formData.append('picture[title]', this.state.title)
            formData.append('picture[description]', this.state.description)
            formData.append('picture[user_id]', this.state.userId)
            formData.append('picture[picture]', this.state.pictureFile)
            this.props.createPicture(formData).then(res => this.props.history.push('/pictures/'));
            // this.props.history.push('/pictures')
            
        }
    }


    handleCancel(e) {
        this.setState({ selectForm: 0 })
    }


    render() {
   
        const PreviewPhoto = this.state.pictureUrl ? <img className="upload-form-preview" src={this.state.pictureUrl} /> : null;


        if (this.state.selectForm === 0) {
            return (
                <div className="full">
                <div className="upload-photo-container"> 
                    <h1>Upload Photo</h1>
                        <div className="upload-form">
                            <h3>Upload your photo here</h3>
                            <input type="file" onChange={this.handleFile} id="file"  />
                                <div className="requirements">
                                    <h2>Photo Requirements</h2>
                                        <p>
                                        .jpg only
                                        Max. photo dimensions are 200MP/megapixels
                                        </p>

                                    <h2>Licensing requirements</h2>
                                        <p>Min. photo dimensions are 3MP/megapixels
                                        No watermarks, logos, or borders
                                        No NSFW content
                                        </p>
                                </div>
                        </div>
                    </div>
                </div>
            )
        }


        if (this.state.selectForm === 1) {
            return (
                <div className="full">
                    <div className="uploaded-container-photo"> 
                    <div className="upload-button-box">
                        <label id="uploading-here">
                            <h2>Upload</h2>
                            <input type="file" onChange={this.handleFile} style={{display: "none"}} />
                        </label>
                        <div className="upload-form-preview-photo">
                            {PreviewPhoto}
                        </div>
                    </div>

                    <form className="upload-form" onSubmit={this.handleSubmit}>
                            <h3> Art Selected: </h3> 
                            <label>Title:
                                <input className="title" type="text" value={this.state.title} onChange={this.update("title")} />
                                {this.state.tError ? <p className="errors">Title can not be empty</p> : null}
                            </label> <br/>
                            <label>Description: 
                                <textarea cols="40" rows="6" className="description" type="text" value={this.state.description} onChange={this.update("description")} />
                            </label> <br/>
                            <div>
                                <button className="cancel-button" onClick={this.handleCancel}>Cancel</button>
                                <button className="upload-button" type="submit">Upload</button>
                            </div>

                        </form>
                </div>
            </div>
            )
        }

    }

}

export default UploadPicture; 