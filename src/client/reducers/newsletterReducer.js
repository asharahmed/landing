export default function reducer(state={
    email: null,
    loading: false,
    completed: false,
    error: false
}, action) {
    switch(action.type) {
        case "SUBMIT_EMAIL_SUCCESS": {
            return {...state, loading: false, completed: true, error: false}
        }
        case "SUBMIT_EMAIL_ERROR": {
            return {...state, loading: false, completed: false, error: action.payload || true}
        }
        case "SUBMIT_EMAIL_ATTEMPT": {
            return {...state, completed: false, loading: true}
        }
        default: {
            return {...state}
        }
    }
}