import * as actionTypes from './actionTypes'
import axios from '../../axios'

export const fetchUsers = (users) => {
    return {
        type: actionTypes.FETCHUSERS,
        usersData: users
    }
}

export const fetchAllUsers = () => {
    return dispatch => {
        axios.get('users').then(response => {       
            console.log(response.data)   
            dispatch(fetchUsers(response.data))
        })
    }
}