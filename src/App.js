import React from 'react';
import './App.css';
import UsersList from './components/UsersList';

const App = () => {
  return (
    <body>
      <div className="title">
        <h1>Random User Generator</h1>
      </div>
      <UsersList />
    </body>
  );
};

export default App;
