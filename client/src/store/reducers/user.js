import * as actionTypes from '../actions/actionTypes'
import { updatedObject } from '../utility'

const initialState = {
    users: {
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
    ]

}

export const fetchUsers = (state, action) => {
    updatedObject(state, { users: action.users })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state
    }
}

export default reducer