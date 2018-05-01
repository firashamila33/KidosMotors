import axios from "axios";
import {LOCATION ,FETCH_PRODUCTS ,FETCH_SINGLE_PRODUCTS, BASKET_ADD ,BASKET_REMOVE_ITEM  ,FETCH_CARS} from "./types";




export const fetchProducts = () =>async dispatch =>{
  const res = await axios.get("/api/products");
  dispatch({type: FETCH_PRODUCTS,payload :res.data});
}


export const fetchProduct = (id) =>async dispatch =>{
  const res = await axios.get(`/api/product/:${id}`);
  dispatch({type: FETCH_SINGLE_PRODUCTS,payload :res.data});
}

export function addToBasket(product){
  return(
    {type: BASKET_ADD,
      payload : product
    }
  ); 
}

export function removeFromBasket(id){
  return(
    {type: BASKET_REMOVE_ITEM,
      payload : id
    }
  ); 
}

export const fetchCars = () =>async dispatch =>{
  const res = await axios.get("/api/cars");
  dispatch({type: FETCH_CARS,payload :res.data});
}
