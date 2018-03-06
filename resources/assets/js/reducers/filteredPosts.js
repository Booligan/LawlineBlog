export default (state = [], action) => {
    switch (action.type) {
        case 'GET_FILTERED_POSTS_SUCCESS':
            return action.payload;
            break;
        default:
            return state;
    }
}