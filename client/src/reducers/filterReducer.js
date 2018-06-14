import { FILTER_ACTIVATION } from '../actions/types';

export default function(state = false, action) {
  switch (action.type) {
    case FILTER_ACTIVATION:
      return action.payload;
    default:
      return state;
  }
}
