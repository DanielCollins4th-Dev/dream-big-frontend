import { SIGN_IN_SUCCESS, USER_LOADED, SIGN_IN_FAILED } from "../actions/types";

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  user: null
};

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
				isAuthenticated: true,
				user: payload
      }
    case SIGN_IN_SUCCESS:
      console.log('SIGN_IN_SUCCESS REDUCER')
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
      };
    case SIGN_IN_FAILED:
      const { email, password } = payload;
      return {
        ...state,
        isAuthenticated: false
      }
    default:
      return state;
  }
}
