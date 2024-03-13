import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { simpleAction, errorAction } from "../store/slices/fakeSlice";

const Main = () => {
  const [payload, setPayload] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setPayload(event.target.value);
  };

  const dispatchAction = () => {
    dispatch(simpleAction(payload));
    setPayload("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") dispatchAction();
  };

  const handleDispatchAction = () => {
    const action = simpleAction(payload);
    dispatch(action);
  };

  const handleDispatchFunction = () =>
    dispatch((dispatch, getState) => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${payload}`)
        .then(response => response.json())
        .then(response => dispatch(simpleAction(response)))
        .catch((error) => dispatch(errorAction(error)));
    });

  return (
    <>
      <div>
        <label htmlFor="action">Action payload</label>
        <input
          id="taskNameInput"
          type="text"
          name="taskItem"
          value={payload}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div>
        <button onClick={handleDispatchAction}>Dispatch action</button>
      </div>
      <div>
        <button onClick={handleDispatchFunction}>Dispatch a function</button>
      </div>
    </>
  );
};

export default Main;
