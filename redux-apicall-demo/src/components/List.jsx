import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { apiRequested, apiCallFailed } from "../store/actionCreators";

const List = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("API calls");

    //the payload is sent as an argument of the action creator
    dispatch(
      apiRequested({
        url: "todos?userId=1",
        method: "get",
        //data: {},
        onSuccess: "todo/todosReceived",
        onError: "error/errorReceived"//apiCallFailed.type,
      })
    );
  }, []);

  return (
    <>
      <div>
        <h2>Shows all todo tasks that have been completed</h2>
      </div>
      <div>
        <ul>
          {todos
            .filter((todo) => todo.completed)
            .map((todo, index) => (
              <li key={index}>{todo.title}</li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default List;
