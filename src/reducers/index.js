import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import flavours from './flavours';
import comments from './comments';

const rootReducer = combineReducers({flavours, comments, routing: routerReducer });

export default rootReducer;
