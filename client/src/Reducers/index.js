import { combineReducers } from 'redux';

import sessionsReducer from './manageSessions';

const rootReducer = combineReducers({

    sessions: sessionsReducer
})

export default rootReducer;
