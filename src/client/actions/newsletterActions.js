export function submitEmail(email) {
    return async (dispatch) => {
        dispatch({type: "SUBMIT_EMAIL_ATTEMPT"})
        let request = {
            email
        }
        console.log(request)
        const response = await fetch("/api/newsletter/submitEmail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(request)
        })
        const data = await response.json()
        if(data.err)
            return dispatch({type: "SUBMIT_EMAIL_ERROR", payload: data.err})
        return dispatch({type: "SUBMIT_EMAIL_SUCCESS"})
    }
}