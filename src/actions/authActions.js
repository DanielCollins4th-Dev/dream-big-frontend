import { SIGN_IN_SUCCESS } from "./types";

export const signin = (email, password) => dispatch => {
    // here, let's do axios and get result
    const name = "Daniel Collins", picture = "";
    dispatch({
        type: SIGN_IN_SUCCESS,
        payload: {
            email, name, picture
        }
    })
};

export const signup = userData => dispatch => {
};

export const signout = () => dispatch => {
};