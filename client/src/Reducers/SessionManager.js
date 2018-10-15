export default function sessionManager(
	state = {
		auth: {isAuthenticated: false, userId: null},
		current_user: "",
		loggingIn: false,
	},
	action)
 	{
 		switch(action.type){
 			case "LOGGING_IN":
 				return {...state, loggingIn: true}
 			case "LOGGED_IN":
 				return {...state, loggingIn: false, auth: {isAuthenticated: true, userId: action.user.id}, current_user: action.user.username }
 			case "LOGOUT":
 				return {...state, auth: {isAuthenticated: false, userId: null}, current_user: ""}
 			default:
 				return state
 		}
}
