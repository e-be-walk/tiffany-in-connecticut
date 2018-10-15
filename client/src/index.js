import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import registerServiceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './Reducers/RootReducer'
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { BrowserRouter as Router} from 'react-router-dom'

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));
//registerServiceWorker();
