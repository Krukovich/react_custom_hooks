import React, { useState } from 'react';
import axios from 'axios';
import useDebounce from '../hooks/useDebounce';

const fetchTodos = (limit) => {
  return axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
    .then((res) => res.data);
};

const FetchTodosComponent = () => {
  const [value, setValue] = useState('');
  const [response, setResponse] = useState([]);
  const debouncedCallback = useDebounce(fetchTodos, 1000, setResponse);

  const change = (e) => {
    setValue(e.target.value);
    debouncedCallback(e.target.value);
  };

  return (
    <>
      <input type="text" placeholder="input number" value={value} onChange={change} />

      {response.map((todo) => (
        <div key={todo.id} style={{ marginTop: 10, padding: 10, border: '2px solid black' }}>
          {todo.id}. {todo.title}
        </div>
      ))}
    </>
  );
};

export default FetchTodosComponent;
