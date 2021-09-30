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
    userUpdate: {
        name: { value: '', placeHolder: 'Name' },
        surname: { value: '', placeHolder: 'SurName' },
        username: { value: '', placeHolder: 'User Name' },
        title: { value: '', placeHolder: 'Title' },
        email: { value: '', placeHolder: 'Email' },
        role: { value: '', placeHolder: 'Role' }
    },
    columns: [
        {
            id: 0,
            name: "ID",
            selector: "_id",
            sortable: true,
            reorder: true
        },
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
    addUserEditable: false,
    updateUserEditable: false,
    deleteUserEditable: false,
    specificUserEditable: false,
    idFromUser: ''
}

export const fetchUsers = (state, action) => {
    return updatedObject(state, { userList: action.usersData })
}
export const editUserModal = (state, action) => {
    let user = state.userList.filter(user => user._id === action.userId)
    return updatedObject(state, { user: user, addUserEditable: true })
}
export const openAddUserModal = (state, action) => {
    return updatedObject(state, { addUserEditable: true })
}
export const idFromUser = (state, action) => {
    return updatedObject(state, { idFromUser: action.id })
}
export const openDeleteUserModal = (state, action) => {
    return updatedObject(state, { deleteUserEditable: true })
}
export const openUpdateUserModal = (state, action) => {
    let selectedUser = state.userList.filter(user => user._id === state.idFromUser)
    selectedUser.map(user => {
        state.userUpdate.name.value = user.name
        state.userUpdate.surname.value = user.surname
        state.userUpdate.username.value = user.username
        state.userUpdate.title.value = user.title
        state.userUpdate.email.value = user.email
        state.userUpdate.role.value = user.role
    })

    return updatedObject(state, { user: selectedUser, updateUserEditable: true })
}
export const updateUser = (state, action) => {
    return updatedObject(state, { userUpdate: action.updateUserObject })
}
export const openSpecificUserModal = (state, action) => {
    return updatedObject(state, { specificUserEditable: true })
}
export const closeUserModal = (state, action) => {
    return updatedObject(state, { addUserEditable: false, updateUserEditable: false, deleteUserEditable: false, specificUserEditable: false })
}
export const addNewUser = (state, action) => {
    return updatedObject(state, { newUser: action.newUserObject })
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCHUSERS: return fetchUsers(state, action)
        case actionTypes.OPENADDUSERMODAL: return openAddUserModal(state, action)
        case actionTypes.GETIDFROMUSER: return idFromUser(state, action)
        case actionTypes.UPDATEUSER: return updateUser(state, action)
        case actionTypes.OPENDELETEUSERMODAL: return openDeleteUserModal(state, action)
        case actionTypes.OPENUPDATEUSERMODAL: return openUpdateUserModal(state, action)
        case actionTypes.OPENSPECIFICUSERMODAL: return openSpecificUserModal(state, action)
        case actionTypes.EDITUSERMODAL: return editUserModal(state, action)
        case actionTypes.CLOSEUSERMODAL: return closeUserModal(state, action)
        case actionTypes.ADDUSER: return addNewUser(state, action)
        default: return state
    }
}

export default reducer