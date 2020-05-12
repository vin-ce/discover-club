import { createStore, combineReducers, compose } from 'redux';

import { default as project } from './project';

const rootReducer = combineReducers({
	project,
});

const composeEnhancers =
	process.env.NODE_ENV === 'development'
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		: null || compose;

const store = createStore(rootReducer, composeEnhancers());

export default store;
