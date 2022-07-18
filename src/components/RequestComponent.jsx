import React from "react";
import axios from "axios";
import useRequest from "../hooks/useRequest";

const fetchTodos = () => {
  return axios.get(`https://jsonplaceholder.typicode.com/todos`);
};

const RequestComponent = () => {
  const [todos, loading, error] = useRequest(fetchTodos);

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    console.log(error);
  }

  return (
    <>
      {todos?.map((todo) => (
        <div key={todo.id} style={{ marginTop: 10, padding: 10, border: '2px solid black' }}>
          {todo.id}. {todo.title}
        </div>
      ))}
    </>
  );
};

export default RequestComponent;
