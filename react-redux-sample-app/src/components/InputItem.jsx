import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../slices/taskSlice";

const InputItem = () => {
  const [taskName, setTaskName] = useState("");

  const dispatch = useDispatch();

  const handleClick = () => dispatch(addTask(taskName));

  const handleChange = (event) => setTaskName(event.target.value);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") dispatch(addTask(taskName));
  };

  return (
    <div>
      <label htmlFor="taskItem">Task name:</label>
      <input
        id="taskNameInput"
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
