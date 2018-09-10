export function submitEmail(email) {
    return async (dispatch) => {
        dispatch({type: "SUBMIT_EMAIL_ATTEMPT"})
        const response = await fetch("/api/newsletter/submitEmail", {
            method: "POST",
            body: {
                email
            }
        })
        const data = await response.json()
        if(data.err)
            return dispatch({type: "SUBMIT_EMAIL_ERROR", payload: err})
        return dispatch({type: "SUBMIT_EMAIL_SUCCESS"})
    }
}