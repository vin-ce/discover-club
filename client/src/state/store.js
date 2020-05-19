import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';

import { default as project } from './project';

const rootReducer = combineReducers({
    project,
});

// http://remotedev.io/local/
const composeEnhancers = composeWithDevTools({ realtime: true, hostname: 'localhost', port: 8000 });

const store = createStore(rootReducer, composeEnhancers());

export default store;
