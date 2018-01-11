import { createStore, combineReducers } from 'redux';
import { routerReducer} from 'react-router-redux';
import rootReducer from './reducers/index';

//import comments from './data/comments';
//import posts from './data/posts';

// create an object for the default data
import flavours from './data/flavours';

const comments = {};
const defaultState = {
  flavours, 
  comments
};

const store = createStore(rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//Hot reloading of reducers
if(module.hot) {
  module.hot.accept('./reducers/',() => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
