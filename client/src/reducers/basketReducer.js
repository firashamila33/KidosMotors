import {
  BASKET_ADD,
  BASKET_REMOVE_ITEM,
  BASKET_EDIT_ITEM
} from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case BASKET_ADD:
      var {product,quantity} = action.payload;    
      var exist = false;
      var currentQuentity = 0;
      

      state.forEach(e => {
        if (e.product._id === product._id) {
          currentQuentity = e.quantity;
          exist = true;
        }
      });
      if (exist) {
        state = state.filter(function(e) {
          return e.product._id !== product._id;
        });
        currentQuentity += quantity;
        return [{ product, quantity: currentQuentity }, ...state];
      } else {
        return [{ product, quantity }, ...state];
      }
    case BASKET_REMOVE_ITEM:
      state = state.filter(function(item) {
        return item.product._id !== action.payload;
      });
      return state;

      

    case BASKET_EDIT_ITEM:
      var newstate = [];
      var {product,quantity} = action.payload; 
      console.log(state);
      state.map(function(item) {
        if(item.product._id !== action.payload.product._id)
          newstate.push(item);
        else(newstate.push({product,quantity}));
      });
      
      state=newstate;
      return newstate;

    default:
      return state;
  }
}
