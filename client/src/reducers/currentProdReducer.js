import { FETCH_SINGLE_PRODUCTS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_SINGLE_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
}
