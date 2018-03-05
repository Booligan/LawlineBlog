export default (state = [], action) => {
    switch (action.type) {
        case 'GET_CATEGORIES_SUCCESS':
            return action.payload;
            break;
        default:
            return state;
    }
}