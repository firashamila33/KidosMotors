import { combineReducers } from 'redux';

import productsReducer from './productsReducer';
import pathReducer from './pathReducer';
import selectedProductReducer from './currentProdReducer';
import basketproductsReducer from './basketReducer';
import carsReducer from './carsReducer';

export default combineReducers({
  locationPath:pathReducer,
  products:productsReducer,
  selectedProduct:selectedProductReducer,
  basketproducts:basketproductsReducer,
  cars:carsReducer
});
