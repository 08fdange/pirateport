const initialState = {
    currentUser: {},
    users: []
}

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_USER':
            return {...state, currentUser: action.payload}
        
        case 'ADD_USERS':
            return {...state, users: action.users}

        default:
            return state;
    }
}

