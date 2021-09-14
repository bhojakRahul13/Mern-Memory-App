import {
  FETCH_ALL,
  CREATE,
  UPDATE_POST,
  DELETE_POST,
  LIKE_POST,
} from "../constant";

const initialState = {
  posts: [],
};

const posts = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ALL:
      return { ...state, posts: payload };

    case CREATE:
      console.log("payload", payload)
      return { ...state, posts: [...state.posts, payload] };  

    //multiple used
    case UPDATE_POST:
    case LIKE_POST: 
      return {...state, posts :  state?.posts.map((post) => (post._id === payload._id ? payload : post)) };

    case DELETE_POST:
      return {...state, posts : state.posts.filter((post) => post._id !== payload)};

    default:
      return state;
  }
};

export default posts;
