import * as actionTypes from './actionTypes'
import axios from '../../axios'

export const fetchUsers = (users) => {
    return {
        type: actionTypes.FETCHUSERS,
        usersData: users
    }
}

export const editUserModal = (userId) => {
    return {
        type: actionTypes.EDITUSERMODAL,
        userId: userId
    }
}
export const openAddUserModal = () => {
    return {
        type: actionTypes.OPENADDUSERMODAL
    }
}
export const openDeleteUserModal = () => {
    return {
        type: actionTypes.OPENDELETEUSERMODAL,
    }
}
export const openUpdateUserModal = () => {
    return {
        type: actionTypes.OPENUPDATEUSERMODAL,

    }
}
export const updateUser = (updateUserObject) => {
    return {
        type: actionTypes.UPDATEUSER,
        updateUserObject: updateUserObject
    }
}

export const openSpecificUserModal = (userData) => {
    return {
        type: actionTypes.OPENSPECIFICUSERMODAL,
        userData: userData
    }
}
export const closeUserModal = () => {
    return {
        type: actionTypes.CLOSEUSERMODAL
    }
}

export const addNewUser = (newUserObject) => {
    return {
        type: actionTypes.ADDUSER,
        newUserObject: newUserObject
    }
}
export const getIdFromUser = (id) => {
    return {
        type: actionTypes.GETIDFROMUSER,
        id: id
    }
}
export const changeSearchFilter = (searchItem) => {
    return {
        type: actionTypes.SEARCHEDUSERLIST,
        searchItem: searchItem
    }
}
export const updateUserResponse = (response) => {
    return {
        type: actionTypes.UPDATEUSERRESPONSE,
        response: response
    }
}
export const deleteUserResponse = (response) => {
    return {
        type: actionTypes.DELETEUSERRESPONSE,
        response: response
    }
}
export const newUserResponse = (response) => {
    return {
        type: actionTypes.NEWUSERRESPONSE,
        response: response
    }
}

export const fetchAllUsers = () => {
    return dispatch => {
        axios.get('users').then(response => {
            dispatch(fetchUsers(response.data))
        })
    }
}
export const sendNewUser = (userObject) => {
    return dispatch => {
        axios.post("add-user", userObject).then(response => {
            dispatch(newUserResponse(response.statusText))
        })
    }
}
export const sendUpdateUser = (userId, userUpdatedObject) => {
    return dispatch => {
        console.log("updateuser", userUpdatedObject)
        axios.put(`update-user/${userId}`, userUpdatedObject).then(response => {
            console.log(response.statusText)
            dispatch(updateUserResponse(response.statusText))
        })
    }
}
export const deleteUser = (userId) => {
    return dispatch => {
        axios.delete(`delete-user/${userId}`).then(response => {
            dispatch(deleteUserResponse(response.statusText))
        })
    }
}
export const getSpecificUser = (userId) => {
    return dispatch => {
        axios.get(`users/${userId}`).then(response => {
            dispatch(openSpecificUserModal(response.data))
        })
    }
}