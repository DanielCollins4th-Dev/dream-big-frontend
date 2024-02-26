import { SIGN_IN_SUCCESS, SIGN_IN_FAILED, USER_LOADED } from "./types";
import axios from "axios";
import base_url from './config'
import setAuthToken from "utils/setAuthToken";

export const loadUser = () => async dispatch => {
    // if (localStorage.token) {
    //     setAuthToken(localStorage.token);
    // }

    // try {
        const res = await axios.get(`${base_url}/users/current`, {
            headers: {Authorization: localStorage.token}
        });
        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    // } catch (err) {
        // dispatch({
            // type: AUTH_ERROR
        // });
    // }
};

export const signin = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = { email, password };

    try {
        const res = await axios.post(`${base_url}/users/login`, body);

        if (res.data.success) {
            dispatch({
                type: SIGN_IN_SUCCESS,
                payload: res.data
            });
            dispatch(loadUser())
        }
        else {
            dispatch({
                type: SIGN_IN_FAILED,
                payload: res.data
            })
        }
    } catch (err) {
        const errors = err.data

        // if (errors) {
        //     // errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        //     window.alert('sss')
        //     errors.forEach(error => console.log(error.msg))
        // }

        // dispatch({
        //     type: LOGIN_FAIL
        // });
    }
};

export const signup = userData => dispatch => {
};

export const signout = () => dispatch => {
};