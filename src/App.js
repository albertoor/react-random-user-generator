import React from 'react';
import './style.css';
import getUsers from './services/getUsers';

const App = () => {
  getUsers().then(data => {
    console.log(data);
  });

  return <div> Hello from App</div>;
};

export default App;
