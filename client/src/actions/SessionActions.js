const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

export const createSession = (email, password) => {
    return (dispatch) => {
        dispatch({type: 'LOADING PAGE'});
        return fetch('/login', {
            method: "POST",
            body: JSON.stringify({email: email, password: password}),
            headers
        })
            .then(response => response.json())
            //.then(user => console.log(user))
            .then(user => {
                dispatch({type: 'CREATE_SESSION', payload: user})
            })
    }
}

export const deleteSession = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING PAGE'});
        return fetch('/api/logout', {
            method: "DELETE",
            headers
        })
            //.then(response => response.json())
            .then(() => {
                dispatch({type: 'DELETE_SESSION'})
            })
    }
}
