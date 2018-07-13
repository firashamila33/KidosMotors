import {NAV_ACTIVATE, FETCH_PRODUCT} from "./types";
import axios from 'axios';

export const navActive = (val) => async dispatch => {
    dispatch({type: NAV_ACTIVATE, payload: val});
};

export const submitProduct = (values) => async dispatch => {
    await axios.post('/api/admin/product', values);
};

export const fetchProduct = () => async dispatch => {
    const products = await axios.get('/api/admin/product');
    dispatch({type: FETCH_PRODUCT, payload: products.data});
};

export const deleteProduct = (id) => async dispatch => {
    const products = await axios.delete(`/api/admin/delete/product/:${id}`);
    dispatch({type: FETCH_PRODUCT, payload: products.data});
};
