import React from 'react';
import './style.css';
import useUsers from './hooks/useUsers';

const App = () => {
  const users = useUsers();

  return <div> Hello from App</div>;
};

export default App;
