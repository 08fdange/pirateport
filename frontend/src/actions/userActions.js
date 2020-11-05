export const userPostFetch = user => {
    return dispatch => {
        return fetch('/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                'email': user.email,
                'username': user.username,
                'name': user.name,
                'password': user.password,
                'password_confirmation': user.password_confirmation
            })
        })
        .then(resp => resp.json())
        .then(data => {
            if(data.errors) {
                console.log(data.errors)
                console.log(data)
            }
            else {
                console.log(data)
                localStorage.setItem("token", data.auth_token)
                dispatch(loginUser(user))
            }
        })
    }
}

const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})

const addUsers = users => ({
    type: 'ADD_USERS',
    users: users
})

export const userLoginFetch = user => {
    return dispatch => {
        return fetch('/users/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            Accept: 'application/json'
            },
            body: JSON.stringify({
                'email': user.email,
                'password': user.password
            })
        })
        .then(resp => resp.json())
        .then(data => {
            if(data.errors) {
                console.log(data.errors)
                console.log(data)
            }
            else if(data.error) {
                console.log(data.error)
                console.log(data)
            }
            else {
                console.log(data)
                console.log("LOGIN SUCCESS")
                localStorage.setItem("token", data.auth_token)
                dispatch(loginUser(data.user))
            }
        })
    }  
}

export const getUsersFetch = () => {
    return dispatch => {
        const token = localStorage.token;
        if (token) {
            return fetch('/users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(resp => resp.json())
            .then(data => {
                if(data.message || data.error) {
                    console.log(data)
                    localStorage.removeItem("token")
                }
                else {
                    dispatch(addUsers(data))
                }
            })
        }
    }
}