import * as actionTypes from '../actions/actionTypes'
import { updatedObject } from '../utility'

const initialState = {
    success: ''
}

export const setNotification = (state, action) => {
    return updatedObject(state, { success: action.info })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SETNOTIFICATION: return setNotification(state, action)
        default: return state
    }
}

export default reducer