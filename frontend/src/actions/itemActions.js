export const postItem = (item) => {
    console.log(item)
    return dispatch => {
        return fetch(`/users/${localStorage.currentUser}/items`, {
            method: 'POST',
            headers: {
                'Authorization': `${localStorage.getItem('token')}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'title': item.title,
                'description': item.description,
                'city': item.city,
                'state': item.state,
                'location': item.location,
                'category': item.category,
                'price': item.price,
                'user_id': item.user_id
            })
        })
        .then(resp => resp.json())
        .then(data => {
            if(data.error) {
                console.log(data)
            }
            else {
                console.log("Item Created")
                console.log(data)
                localStorage.setItem('newItemId', data.data.id)
            }
        })
    }
}

export const postPicture = (formData) => {
    return dispatch => {
        return fetch(`/users/${localStorage.currentUser}/items/${parseInt(localStorage.newItemId)}/upload_picture`, {
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
                localStorage.removeItem('newItemId')
            }
        })
    }
}

export const editItem = (item) => {
    return dispatch => {
        return fetch(`/users/${localStorage.getItem('currentUser')}/items/${item.id}/`, {
            method: 'PATCH',
            headers: {
                'Authorization': `${localStorage.getItem('token')}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'title': item.title,
                'description': item.description,
                'city': item.city,
                'state': item.state,
                'location': item.location,
                'category': item.category,
                'price': item.price,
                'user_id': item.user_id
            })
        })
        .then(resp => resp.json())
        .then(data => {
            if(data.error) {
                console.log(data)
            }
            else {
                console.log("Item Edited")
                console.log(data)
            }
        })
    }
}

export const deleteItem = (item) => {
    return dispatch => {
        return fetch(`/users/${localStorage.getItem('currentUser')}/items/${item.id}/`, {
            method: 'DELETE',
            headers: {
                'Authorization': `${localStorage.getItem('token')}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    }
}

export const fetchItems = () => {
    return dispatch => {
        return fetch('/items')
        .then(resp => resp.json())
        .then(data => {
            if(data.error) {
                console.log(data)
            }
            else {
                dispatch({type: 'ADD_ITEMS', payload: data.data})
            }
        })
    }
}