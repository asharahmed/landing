import { combineReducers } from "redux"

import newsletter from "./newsletterReducer"
import animations from "./animationsReducer"

export default combineReducers({
    newsletter,
    animations
})