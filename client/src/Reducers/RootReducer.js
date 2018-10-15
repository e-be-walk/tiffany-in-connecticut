import{ combineReducers } from 'redux';
import SessionManager from './SessionManager';

const rootReducer = combineReducers({
  session: SessionManager
});

export default rootReducer;
