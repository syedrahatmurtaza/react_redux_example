import { FETCH_POSTS, NEW_POSTS } from "../actions/types";

const initialStage = {
  items: [],
  item: {},
};

export default function postReducer(state = initialStage, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload,
      };
    case NEW_POSTS:
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
}
