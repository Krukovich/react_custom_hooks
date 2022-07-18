import React from 'react';
import FetchTodosComponent from './components/FetchTodosComponent';
import RequestComponent from './components/RequestComponent';
import List from './components/List';

const App = () => {
  return (
    <>
      <FetchTodosComponent />
      <List />
      <RequestComponent />
    </>
  );
};

export default App;
