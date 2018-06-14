import { combineReducers } from "redux";

import productsReducer from "./productsReducer";
import pathReducer from "./pathReducer";
import selectedProductReducer from "./currentProdReducer";
import basketproductsReducer from "./basketReducer";
import carsReducer from "./carsReducer";
import whishListReducer from "./whishListReducer";
import selectedCarReducer from "./currentCarReducer";
import fetchedCarsReducer from "./fetchedCarsReducer";
import filteractivationReducer from "./filterReducer";

export default combineReducers({
  locationPath: pathReducer,
  products: productsReducer,
  selectedProduct: selectedProductReducer,
  selectedCar: selectedCarReducer,
  basketproducts: basketproductsReducer,
  cars: carsReducer,
  whishlistproducts: whishListReducer,
  fetchedCars: fetchedCarsReducer,
  homefilterActivated: filteractivationReducer
});
