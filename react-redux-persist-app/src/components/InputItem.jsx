import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../slices/taskSlice";

const InputItem = () => {
  const [taskName, setTaskName] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const handleClick = () => dispatch(addTask(taskName));

  const handleChange = (event) => setTaskName(event.target.value);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      inputRef.current.value = "";
      dispatch(addTask(taskName));
    }
  };

  return (
    <div>
      <label htmlFor="taskNameInput">Task name:</label>
      <input
        id="taskNameInput"
        ref={inputRef}
        type="text"
        name="taskItem"
        value={taskName}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleClick}>Add Task</button>
    </div>
  );
};

export default InputItem;
