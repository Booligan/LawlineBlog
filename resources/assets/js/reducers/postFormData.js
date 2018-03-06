const initialState = {
    title: "",
    body: "",
    author: "",
    img_url: "",
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