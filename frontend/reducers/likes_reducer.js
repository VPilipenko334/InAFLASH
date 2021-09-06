import { RECEIVE_LIKE } from "../actions/like_actions";
import { RECEIVE_LIKES } from "../actions/like_actions";
import { REMOVE_LIKE } from "../actions/like_actions";

const likesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_LIKES:
            return action.likes;
        case RECEIVE_LIKE:
            return Object.assign({}, oldState, {
                [action.id]: {
                    id: action.id,
                    userId: action.userId,
                    pictureId: action.pictureId,
                },
            });
        case REMOVE_LIKE:
            const nextState = Object.assign({}, oldState);
            delete nextState[action.likeId];
            return nextState;
        default:
            return oldState;
    }
};

export default likesReducer;
