import axios from "axios";
import { FETCH_USER, FETCH_SURVEYS ,LOCATION ,FETCH_PRODUCTS ,FETCH_SINGLE_PRODUCTS, BASKET_ADD ,BASKET_REMOVE_ITEM  ,FETCH_CARS, FETCH_SINGLE_CAR} from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post("/api/surveys", values);
  //this async request to the Server is to create a survey and send emails
  //using Sangrid Mailer
  history.push("/surveys"); //redirection to Dashboeard using history
  //whith is provided by react-router withRouter helper
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get("/api/surveys");

  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};


export const fetchPath = () =>async dispatch =>{
  const res="/firas/hamila/esprit";

  dispatch({type: LOCATION,payload :res});
}




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

export const fetchCar = (id) =>async dispatch =>{
  const res = await axios.get(`/api/car/:${id}`);
  dispatch({type: FETCH_SINGLE_CAR,payload :res.data});
}
