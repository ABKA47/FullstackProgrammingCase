import * as actionTypes from '../actions/actionTypes'
import { updatedObject } from '../utility'

const initialState = {
    newUser: {
        name: { value: '', placeHolder: 'Name' },
        surname: { value: '', placeHolder: 'SurName' },
        username: { value: '', placeHolder: 'User Name' },
        title: { value: '', placeHolder: 'Title' },
        email: { value: '', placeHolder: 'Email' },
        role: { value: '', placeHolder: 'Role' }
    },
    columns: [
        {
            id: 1,
            name: "Name",
            selector: "name",
            sortable: true,
            reorder: true
        },
        {
            id: 2,
            name: "Surname",
            selector: "surname",
            sortable: true,
            reorder: true
        },
        {
            id: 3,
            name: "Username",
            selector: "username",
            sortable: true,
            reorder: true
        },
        {
            id: 4,
            name: "Title",
            selector: "title",
            sortable: true,
            reorder: true
        },
        {
            id: 5,
            name: "Email",
            selector: "email",
            sortable: true,
            reorder: true
        },
        {
            id: 6,
            name: "Role",
            selector: "role",
            sortable: true,
            reorder: true
        },
    ],
    userList: [],
    user: [],
    editAble: false
}

export const fetchUsers = (state, action) => {
    return updatedObject(state, { userList: action.usersData })
}
export const editUserModal = (state, action) => {
    let user = state.userList.filter(user => user._id === action.userId)
    return updatedObject(state, { user: user, editAble: true })
}
export const openUserModal = (state, action) => {
    return updatedObject(state, { editAble: true })
}
export const closeUserModal = (state, action) => {
    return updatedObject(state, { editAble: false })
}
export const addNewUser = (state, action) => {
    return updatedObject(state, { newUser: action.newUserObject })
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCHUSERS: return fetchUsers(state, action)
        case actionTypes.OPENUSERMODAL: return openUserModal(state, action)
        case actionTypes.EDITUSERMODAL: return editUserModal(state, action)
        case actionTypes.CLOSEUSERMODAL: return closeUserModal(state, action)
        case actionTypes.ADDUSER: return addNewUser(state, action)
        default: return state
    }
}

export default reducer