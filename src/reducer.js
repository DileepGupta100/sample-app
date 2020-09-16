export const counterReducer = (counter, action) => {
  switch (action.type) {
    case "INCR":
      return { value: counter.value + 1 };
    case "DECR":
      return { value: counter.value - 1 };
    default:
      return counter;
  }
};
export const postReducer = (state, action) => {
  switch (action.type) {
    case "SET":
      return { posts: [], loading: true };
    case "SET_SUCCESS":
      return { posts: action.data, loaded: true };
    default:
      return state;
  }
};

const rootReducer = (state, action) => {
  const { counter, posts } = state;
  return {
    counter: counterReducer(counter, action),
    posts: postReducer(posts, action)
  };
};

export default rootReducer;
export const initialState = {
  counter: { value: 0 },
  posts: { posts: [] }
};
