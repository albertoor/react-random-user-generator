import React from 'react';
import './style.css';
import useUsers from './hooks/useUsers';

const App = () => {
  const users = useUsers();

  console.log(users);

  return (
    <div>
      Hello
      {users.map(item => (
        <div>
          <img src={item.picture.thumbnail} />
          <h2>{item.email}</h2>
        </div>
      ))}
    </div>
  );
};

export default App;
