import React, { useState } from 'react';
import axios from 'axios';
import useDebounce from '../hooks/useDebounce';

const fetchTodos = () => {
  return axios.get(`https://jsonplaceholder.typicode.com/todos`);
};

function FetchTodosComponent() {
  const [value, setValue] = useState('');
  const debouncedCallback = useDebounce(fetchTodos, 1000);

  const change = (e) => {
    setValue(e.value);
    debouncedCallback();
  };

  return (
    <>
      <input type="text" placeholder="search" value={value} onChange={change} />
    </>
  );
}

export default FetchTodosComponent;
