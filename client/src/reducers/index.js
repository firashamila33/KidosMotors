import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import surveysReducer from './surveysReducer';
import productsReducer from './productsReducer';
import pathReducer from './pathReducer';
import selectedProductReducer from './currentProdReducer';
import basketproductsReducer from './basketReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  surveys: surveysReducer,
  locationPath:pathReducer,
  products:productsReducer,
  selectedProduct:selectedProductReducer,
  basketproducts:basketproductsReducer

});
