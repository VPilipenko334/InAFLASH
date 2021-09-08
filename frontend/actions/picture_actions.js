import * as PictureAPIUtil from "../util/picture_api_util";

export const RECEIVE_PICTURE = "RECEIVE_PICTURE";
export const RECEIVE_PICTURES = "RECEIVE_PICTURES";
export const REMOVE_PICTURE = "REMOVE_PICTURE";

//thunk actions
const receivePicture = (picture) => {
    return {
        type: RECEIVE_PICTURE,
        picture
    }
}

const receivePictures = (pictures) => {
    return {
        type: RECEIVE_PICTURES,
        pictures
    }
}

const removePicture = (pictureId) => {
    return {
        type: REMOVE_PICTURE,
        pictureId
    }
}


export const fetchPicture = pictureId => dispatch =>
    PictureAPIUtil.fetchPicture(pictureId).then(picture => dispatch(receivePicture(picture)))
// think about where the fetchPicture is coming from 

export const fetchPictures = () => dispatch =>
    PictureAPIUtil.fetchPictures().then(pictures => dispatch(receivePictures(pictures)))

export const createPicture = (picture) => dispatch =>
    PictureAPIUtil.createPicture(picture).then(dispatch(receivePicture(picture)))

export const deletePicture = (pictureId) => dispatch =>
    PictureAPIUtil.deletePicture(pictureId).then(() => dispatch(removePicture(pictureId)))