export function login(user){
	const userObject = {user: user}

	return function (dispatch) {

    dispatch({ type: 'LOGGING_IN' });

    return fetch('http://localhost:3001/session', {
    	method: "post",
	    headers: {
	      'Content-Type': 'application/json'
	    },
    	body: JSON.stringify(userObject)
    })
    .then(response => response.json())
    .then(user =>

      	dispatch({ type: 'LOGGED_IN', user: user} )

      	);
  };
}
