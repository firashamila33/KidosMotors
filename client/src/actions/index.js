import axios from "axios";
import {FETCH_PRODUCTS ,FETCH_SINGLE_PRODUCTS, BASKET_ADD ,BASKET_REMOVE_ITEM  ,FETCH_CARS ,FETCH_SINGLE_CAR, BASKET_EDIT_ITEM} from "./types";



export const fetchProducts = (category) =>async dispatch =>{
  const res = await axios.get(`/api/products/:${category}`);
  dispatch({type: FETCH_PRODUCTS,payload :res.data});
}


export const fetchProduct = (id) =>async dispatch =>{
  const res = await axios.get(`/api/product/:${id}`);
  dispatch({type: FETCH_SINGLE_PRODUCTS,payload :res.data});
}

export function addToBasket(product , quantity){
  return(
    {type: BASKET_ADD,
      payload : { 
                  product,
                  quantity
                }
    }
  ); 
}

export function removeFromBasket(id){
  return({
    type: BASKET_REMOVE_ITEM,
    payload : id
    }
  );
}

export function changeBasketItem(product,quantity){
  return({
    type : BASKET_EDIT_ITEM,
    payload : {product,
               quantity
              }
  })
}

export const fetchCars = () =>async dispatch =>{
  const res = await axios.get("/api/cars");
  dispatch({type: FETCH_CARS,payload :res.data});
}

export const fetchCar = (id) =>async dispatch =>{
  const res = await axios.get(`/api/car/:${id}`);
  dispatch({type: FETCH_SINGLE_CAR,payload :res.data});
}




