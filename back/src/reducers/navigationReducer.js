import { NAV_ACTIVATE } from '../actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case NAV_ACTIVATE:
            return action.payload;
        default:
            return state;
    }
}