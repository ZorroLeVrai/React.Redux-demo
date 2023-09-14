import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendApiRequest } from "../store/actionCreators";

const List = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("API calls");
    dispatch(
      sendApiRequest({
        url: "todos/",
        method: "get",
        data: {},
        onSuccess: "todo/todosReceived",
        onError: "error/errorReceived",
      })
    );
  }, []);

  return (
    <div>
      <ul>
        {todos
          .filter((todo) => todo.completed)
          .map((todo, index) => (
            <li key={index}>{todo.title}</li>
          ))}
      </ul>
    </div>
  );
};

export default List;
