import {NAV_ACTIVATE} from "./types";

export const navActive = (val) => async dispatch => {
    dispatch({type: NAV_ACTIVATE, payload: val});
};