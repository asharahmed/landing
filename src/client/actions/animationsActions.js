export function highlightEmailField() {
    return async (dispatch) => {
		return dispatch({type: "HIGHLIGHT_EMAIL_FIELD"})
    }
}

export function unHighlightEmailField() {
    return async (dispatch) => {
		return dispatch({type: "UNHIGHLIGHT_EMAIL_FIELD"})
    }
}