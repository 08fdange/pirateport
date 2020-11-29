//Action for signing up user
export const userPostFetch = user => {
    return dispatch => {
        return fetch('/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({ user })
        })
        .then(resp => resp.json())
        .then(data => {
            if(data.errors) {
                console.log(data.errors)
                dispatch({type: 'SET_ERRORS', payload: data.errors})
            }
            else if (data.error) {
                dispatch({type: 'SET_ERROR', payload: data.error})
            }
            else {
                console.log(data.data)
                localStorage.setItem("token", data.auth_token)
                localStorage.setItem("currentUser", data.user.username)
                localStorage.setItem("user_id", data.user.id)
                dispatch({type: 'SET_USER', payload: data.user})
            }
        })
    }
}

//Action for logging in a user
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
                dispatch({type: 'SET_ERRORS', payload: data.errors})
            }
            else if (data.error) {
                console.log(data.error)
                dispatch({type: 'SET_ERROR', payload: data.error})
            }
            else {
                console.log("LOGIN SUCCESS")
                localStorage.setItem("token", data.auth_token)
                localStorage.setItem("currentUser", data.user.username)
                localStorage.setItem("user_id", data.user.user_id)
                dispatch({type: 'SET_USER', payload: data.user})
            }
        })
    }  
}

//Action for making sure user is logged in
export const autoLogin = () => {
    return dispatch => {
        return fetch(`/users/${localStorage.currentUser}`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
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
                // localStorage.setItem('token', data.auth_token)
                dispatch({type: 'SET_USER', payload: data.data})
            }

        })
    }

}

//Action for logging out
export const logout = () => {
    return {
        type: 'LOG_OUT'
    }
}

//Action for posting Avatar
export const postAvatar = formData => {
    return dispatch => {
        return fetch(`/users/${localStorage.currentUser}/upload_avatar`, {
            method: 'POST',
            headers: {
                'Authorization': `${localStorage.getItem('token')}`,
                'Accept': 'application/json'
            },
            body: formData
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.error) {
                console.log(data)
            }
            else {
                console.log(data)
            }
        })
    }
}

//Action for getting all users
export const getUsers = () => {
    return dispatch => {
        return fetch('/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(resp => resp.json())
        .then(data => {
            dispatch({type: 'ADD_USERS', payload: data.data})
        })
    }
}
