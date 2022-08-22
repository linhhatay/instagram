import axios from 'axios';
import { NOTIFY_TYPES } from '../notify/notifyConstants';
import { POST_TYPES } from '../post/postConstants';

export const createComment =
    ({ post, comment, auth }) =>
    async (dispatch) => {
        const newPost = { ...post, comments: [...post.comments, comment] };
        dispatch({ type: POST_TYPES.UPDATE_POST, payload: newPost });
        try {
            dispatch({ type: NOTIFY_TYPES.NOTIFY, payload: { isLoading: true } });
            await axios.post('http://localhost:5000/api/v1/comment/create', comment);
            dispatch({ type: NOTIFY_TYPES.NOTIFY, payload: {} });
        } catch (error) {
            dispatch({ type: NOTIFY_TYPES.NOTIFY, payload: { isError: true } });
        }
    };

export const deleteComment =
    ({ post, comment, auth }) =>
    async (dispatch) => {
        const newPost = {
            ...post,
            comments: post.comments.filter((item) => item._id !== comment._id),
        };

        dispatch({ type: POST_TYPES.UPDATE_POST, payload: newPost });

        try {
            dispatch({ type: NOTIFY_TYPES.NOTIFY, payload: { isLoading: true } });
            await axios.patch(`http://localhost:5000/api/v1/comment/${comment._id}/delete`, {
                postId: post._id,
            });
            dispatch({ type: NOTIFY_TYPES.NOTIFY, payload: {} });
        } catch (err) {
            dispatch({ type: NOTIFY_TYPES.NOTIFY, payload: { isError: true } });
        }
    };
