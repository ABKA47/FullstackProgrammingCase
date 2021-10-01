import * as actionTypes from './actionTypes'

export const setNotification = (info) => {
    return {
        type: actionTypes.SETNOTIFICATION,
        info: info
    }
}
