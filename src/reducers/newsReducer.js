import { GET_NEWS } from "actions/types";

const initialState = {
  news: null
};

export default function (state = initialState, action) {
    const { type, payload } = action
  
    switch (type) {
      case GET_NEWS:
        return {
            ...state
        }
      default:
        return state;
    }
  }
  