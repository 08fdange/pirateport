import { combineReducers } from 'redux';
import usersReducer from './usersReducer.js';
import itemsReducer from './itemsReducer';

export default combineReducers({
    usersReducer,
    itemsReducer
})
