import { SELECTED_PRODUCT } from '../actions/types';

export default function(state = [], action) {
  
  switch (action.type) {
    case SELECTED_PRODUCT:
      return action.payload;
    default:
      return state;
  }
}
