import {combineReducers} from 'redux';

import productReducer from './productReducer';
import navigationReducer from './navigationReducer'

export default combineReducers({
    productReducer: productReducer,
    nav: navigationReducer
});
