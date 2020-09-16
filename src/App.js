import React, { useCallback } from "react";

import { useStore } from "./store";

// const asyncDispatch = (dispatch, state) => (action) => {
//   typeof action === "function" ? action(dispatch, state) : dispatch(action);
// };

const App = () => {
  const { state, dispatch } = useStore();
  const { counter = {}, posts = [] } = state;

  // const dispatch = useCallback(asyncDispatch(dispatchBase, state), []);

  const handlefetch = async (dispatch) => {
    dispatch({ type: "SET" });
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await res.json();
    dispatch({ type: "SET_SUCCESS", data: json });
  };

  return (
    <>
      <span>Counter : {counter.value} </span>
      <button onClick={() => dispatch({ type: "INCR" })}>Increase</button>
      <button onClick={() => dispatch({ type: "DECR" })}>Decrease</button>

      <button onClick={() => handlefetch(dispatch)}>Posts</button>
      {posts.loading && "loading ..."}
      {posts.loaded && posts.posts.map(({id,title,body})=>{
        return <div key={id}><div>{title}</div>
          <div>{body}</div></div>

      })}
    </>
  );
};

export default App;
