import { SIGN_IN_SUCCESS } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  name: "",
  email: "",
  picture: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        name: action.payload.name,
        email: action.payload.email,
        picture: action.payload.picture,
      };
    default:
      return state;
  }
}
