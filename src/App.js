import React from 'react';
import './style.css';
import getUser from './services/getUser';

const App = () => {
  getUser().then(data => {
    console.log(data);
  });

  return <div> Hello from App</div>;
};

export default App;
