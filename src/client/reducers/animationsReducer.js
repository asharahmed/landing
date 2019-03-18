export default function reducer(state={
    highlightEmailField: false
}, action) {
    switch(action.type) {
        case "HIGHLIGHT_EMAIL_FIELD": {
            return {...state, highlightEmailField: true}
		}
		case "UNHIGHLIGHT_EMAIL_FIELD": {
			return {...state, highlightEmailField: false}
		}
        default: {
            return {...state}
        }
    }
}