import { 
    RECEIVE_PICTURE,
    RECEIVE_PICTURES,
    REMOVE_PICTURE
} from '../actions/picture_actions';

const PicturesReducer = (oldState= {}, action) => {
    Object.freeze(oldState)
    let newState = Object.assign({}, oldState)

    switch (action.type) {
        case RECEIVE_PICTURE:
            return action.pictures; 
        case RECEIVE_PICTURES:
            newState[action.picture.id] = action.picture;
            return newState; 
        case REMOVE_PICTURE:
            delete newState[action.pictureId]
            return newState; 
        default:
            return oldState
    }
};

export default PicturesReducer;

