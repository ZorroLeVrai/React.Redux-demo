import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { simpleAction } from "../store/slices/fakeSlice";

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
    const action = simpleAction("ZZ");
    console.log("Action:", action);
  };

  const handleDispatchFunction = () =>
    dispatch((dispatch, getState) => {
      console.log("Executing function with state", getState());

      fetch("https://www.google.com/")
        .then((data) => dispatch(simpleAction(data)))
        .catch((error) => dispatch(errorCreator(error)));
      //dispatch(simpleAction(`Function executed: ${payload}`));
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
        <button onClick={handleDispatchAction}>Dispatch action</button>
      </div>
      <div>
        <button onClick={handleDispatchFunction}>Dispatch a function</button>
      </div>
    </>
  );
};

export default Main;
