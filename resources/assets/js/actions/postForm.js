export const updatePostFormData = postFormData => {
    return {
        type: 'UPDATED_POST',
        postFormData
    }
}

export const resetPostForm = () => {
    return {
        type: 'RESET_POST_FORM'
    }
}