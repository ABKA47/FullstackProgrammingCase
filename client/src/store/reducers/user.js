import * as actionTypes from '../actions/actionTypes'
import { updatedObject } from '../utility'

const initialState = {
    newUsers: {
        id: '',
        name: '',
        surname: '',
        username: '',
        title: '',
        email: '',
        role: []
    },
    columns: [
        {
            id: 1,
            name: "Name",
            selector: (row) => row.title,
            sortable: true,
            reorder: true
        },
        {
            id: 2,
            name: "Surname",
            selector: (row) => row.title,
            sortable: true,
            reorder: true
        },
        {
            id: 3,
            name: "Username",
            selector: (row) => row.title,
            sortable: true,
            reorder: true
        },
        {
            id: 4,
            name: "Title",
            selector: (row) => row.title,
            sortable: true,
            reorder: true
        },
        {
            id: 5,
            name: "Email",
            selector: (row) => row.title,
            sortable: true,
            reorder: true
        },
        {
            id: 6,
            name: "Role",
            selector: (row) => row.title,
            sortable: true,
            reorder: true
        },
    ],
    userList: []
}

export const fetchUsers = (state, action) => {
    return updatedObject(state, { userList: action.usersData })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCHUSERS: return fetchUsers(state, action)
        default: return state
    }
}

export default reducer