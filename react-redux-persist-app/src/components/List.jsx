import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTask } from "../slices/taskSlice";

const List = () => {
  const tasks = useSelector((state) => state.task.tasks);
  const dispatch = useDispatch();

  const handleRemoveTask = (taskId) => dispatch(removeTask(taskId));

  return (
    <>
      <div>Task List</div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task.title}</span>
            <button onClick={() => handleRemoveTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
