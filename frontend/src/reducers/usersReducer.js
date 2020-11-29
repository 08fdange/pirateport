const initialState = {
    loggedIn: false,
    users: [],
    user: {},
    errors: [],
    error: []
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_ERRORS':
            localStorage.clear()
            return {
                ...state,
                loggedIn: false,
                user: {},
                errors: action.payload
            }
        
        case 'SET_ERROR':
            return {
                ...state,
                loggedIn: false,
                user: {},
                error: action.payload
            }

        case 'SET_USER':
            return {
                ...state,
                loggedIn: true,
                user: {...action.payload}
            }
        
        case 'LOG_OUT':
            localStorage.clear()
            return {
                ...state,
                loggedIn: false,
                user: {},
                errors: []
            }
        
        case 'ADD_USERS':
            return {
                ...state, 
                users: action.payload
            }

        default:
            return state;
    }
}

