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
            user_id: this.props.currentUser,
            redirect: false, 
            pictureFile: null, 
            pictureUrl: null,
            tError: false, 
            selectForm: 0,
        }

        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.submitPicture(this.state);
    }

    handleFile(e) {
        const file = e.target.files[0];
        const fileReader = new fileReader // will look for new files uploaded to the page 
        //loads events after element has finished loading 
        fileReader.onloadend = () => {
            this.setState({ pictureFile: file, pictureUrl, selectForm:1 });
        }
        if (file) {
            fileReader.readAsDataUrl(file);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.tError === false) {
            const formData = new formData();
            formData.append('picture[title]', this.state.title)
            formData.append('picture[description]', this.state.description)
            form.append('picture[user_id]', this.state.user_id)
            formData.append('picture[picture]', this.state.pictureFile)
            this.props.createPicture(formData).then(rest => this.props.history.push(`/pictures/${rest.picture.id}`));
        }
    }

    handleCancel(e) {
        this.setState({ selectForm:0})
    }


    render() {
      //can render a special upload photo button here
        const PreviewPhoto = this.state.pictureUrl ? <img className="upload-form-preview" src={this.state.pictureUrl} /> : null;


        if (this.state.selectForm === 0) {
            return (
                <div className="upload-photo-container"> 
                    <h2>Upload Photo</h2>
                        <div className="upload-form">
                            <h2>Upload your photo here</h2>
                            <input type="file" onChange={this.handleFile} id="file"/>
                                <button>Click here to upload</button>
                        </div>
                </div>
            )
        }


        if (this.state.selectForm === 1) {
            return (

                <div className="uploaded-container">
                    <h2>Upload</h2> 
                    <div className="upload-form-preview-photo">
                        {previewPhoto}
                    </div>
                        <form className="upload-form">
                            <h3> Art Selected: </h3> 
                            <label>Title:
                                <input className="title" type="text" value={this.state.title} onChange={this.Update("title")} />
                                {/* {this.state.tError ? <p className="errors">Title can not be empty</p> : null} */}
                            </label>
                            <label>Description: 
                                <textarea cols="40" rows="6" className="description" type="text" value={this.state.description} onChange={this.Update("description")} />
                            </label>
                            <div>
                                <button className="cancel-button" onClick={this.handleCancel}>Cancel</button>
                                <input className="upload-button" onClick={this.handleSubmit} type="submit" value="Upload" />
                            </div>
                        </form>
                        </div>
            )
        }

    }

}

export default UploadPicture; 