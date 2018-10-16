export default function manageSessions(state={loading: false, currentUser: null, errors: []}, action) {
    switch(action.type) {

        case 'LOADING_PAGE':
            return {...state, loading: true};

        case 'CREATE_SESSION':
            return {loading: false, currentUser: action.payload, errors: []}

        case 'DELETE_SESSION':
            return {loading: false, currentUser: null, errors: []}

        default:
            return state;
    }
}
