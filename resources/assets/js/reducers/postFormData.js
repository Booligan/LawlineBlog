const initialState = {
    title: null,
    body: null,
    author: null,
    img_url: null,
    category_id: "1"
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATED_POST':
            return action.postFormData

        case 'RESET_POST_FORM':
            return initialState;

        default:
            return state;
    }
}