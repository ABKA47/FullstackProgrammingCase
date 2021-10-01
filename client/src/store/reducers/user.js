import * as actionTypes from '../actions/actionTypes'
import { updatedObject } from '../utility'

const initialState = {
    newUser: {
        name: { elementType: 'input', value: '', placeHolder: 'Name' },
        surname: { elementType: 'input', value: '', placeHolder: 'SurName' },
        username: { elementType: 'input', value: '', placeHolder: 'User Name' },
        title: { elementType: 'input', value: '', placeHolder: 'Title' },
        email: { elementType: 'input', value: '', placeHolder: 'Email' },
        role: { elementType: 'select', elementConfig: { options: [{ value: 'Admin', displayValue: 'ADMIN' }, { value: 'User', displayValue: 'USER' }], placeHolder: 'Role' }, value: 'Admin' }
    },
    userUpdate: {
        name: { elementType: 'input', value: '', placeHolder: 'Name' },
        surname: { elementType: 'input', value: '', placeHolder: 'SurName' },
        username: { elementType: 'input', value: '', placeHolder: 'User Name' },
        title: { elementType: 'input', value: '', placeHolder: 'Title' },
        email: { elementType: 'input', value: '', placeHolder: 'Email' },
        role: { elementType: 'select', elementConfig: { options: [{ value: 'Admin', displayValue: 'ADMIN' }, { value: 'User', displayValue: 'USER' }], placeHolder: 'Role' }, value: 'Admin' }
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
            reorder: true,
            selectable: true
        },
    ],
    userList: [],
    user: [],
    searchedUserList: [],
    addUserEditable: false,
    updateUserEditable: false,
    deleteUserEditable: false,
    specificUserEditable: false,
    idFromUser: '',
    response: ''
}

export const fetchUsers = (state, action) => {
    return updatedObject(state, { userList: action.usersData, searchedUserList: action.usersData })
}
export const editUserModal = (state, action) => {
    let user = state.userList.filter(user => user._id === action.userId)
    return updatedObject(state, { user: user, addUserEditable: true })
}
export const changeSearchFilter = (state, action) => {
    let serchedValue = state.userList.filter(value => {
        if (
            value.name.toLowerCase().includes(action.searchItem.toLowerCase()) ||
            value.surname.toLowerCase().includes(action.searchItem.toLowerCase()) ||
            value.username.toLowerCase().includes(action.searchItem.toLowerCase()) ||
            value.title.toLowerCase().includes(action.searchItem.toLowerCase()) ||
            value.email.toLowerCase().includes(action.searchItem.toLowerCase()) ||
            value.role.toLowerCase().includes(action.searchItem.toLowerCase())
        ) {
            return value
        }
    })
    return updatedObject(state, { searchedUserList: serchedValue })
}
export const openAddUserModal = (state, action) => {
    return updatedObject(state, { addUserEditable: true })
}
export const idFromUser = (state, action) => {
    let selectedUser = state.userList.filter(user => user._id === action.id)
    return updatedObject(state, { user: selectedUser, idFromUser: action.id })
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
    return updatedObject(state, { user: action.userData, specificUserEditable: true })
}
export const closeUserModal = (state, action) => {
    return updatedObject(state, { addUserEditable: false, updateUserEditable: false, deleteUserEditable: false, specificUserEditable: false })
}
export const addNewUser = (state, action) => {
    return updatedObject(state, { newUser: action.newUserObject })
}
export const newUserResponse = (state, action) => {
    return updatedObject(state, { response: action.response })
}
export const updateUserResponse = (state, action) => {
    return updatedObject(state, { response: action.response })
}
export const deleteUserResponse = (state, action) => {
    return updatedObject(state, { response: action.response })
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
        case actionTypes.SEARCHEDUSERLIST: return changeSearchFilter(state, action)
        case actionTypes.NEWUSERRESPONSE: return newUserResponse(state, action)
        case actionTypes.UPDATEUSERRESPONSE: return updateUserResponse(state, action)
        case actionTypes.DELETEUSERRESPONSE: return deleteUserResponse(state, action)

        default: return state
    }
}

export default reducer