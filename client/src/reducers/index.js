import { combineReducers } from 'redux';

import productsReducer from './productsReducer';
import pathReducer from './pathReducer';
import selectedProductReducer from './currentProdReducer';
import basketproductsReducer from './basketReducer';
import carsReducer from './carsReducer';
import whishListReducer from './whishListReducer';
import selectedCarReducer from './currentCarReducer';

export default combineReducers({
  locationPath:pathReducer,
  products:productsReducer,
  selectedProduct:selectedProductReducer,
  selectedCar:selectedCarReducer,
  basketproducts:basketproductsReducer,
  cars:carsReducer,
  whishlistproducts:whishListReducer,
});
