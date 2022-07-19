import React from 'react';
import FetchTodosComponent from './components/FetchTodosComponent';
import RequestComponent from './components/RequestComponent';
import List from './components/List';
import Hover from "./components/Hover";

const App = () => {
  return (
    <>
      <Hover />
      <FetchTodosComponent />
      <List />
      <RequestComponent />
    </>
  );
};

export default App;
