import {combineReducers} from 'redux';

import productReducer from './productReducer';
import navigationReducer from './navigationReducer'

export default combineReducers({
    products: productReducer,
    nav: navigationReducer,
});
