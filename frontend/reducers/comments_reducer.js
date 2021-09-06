import {
    RECEIVE_COMMENT,
    RECEIVE_COMMENTS,
    REMOVE_COMMENT,
} from "../actions/comment_actions";

const commentsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    const newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_COMMENT:
            newState[action.comment.id] = action.comment;
            return newState;
        case RECEIVE_COMMENTS:
            return Object.assign(newState, action.comments);
        case REMOVE_COMMENT:
            delete newState[action.commentId];
            return newState;
        default:
            return oldState;
    }
};

export default commentsReducer;