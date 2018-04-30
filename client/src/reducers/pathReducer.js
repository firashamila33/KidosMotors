import { LOCATION } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case LOCATION:
      return action.payload;
    default:
      return state;
  }
}
