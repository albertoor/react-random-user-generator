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
          <h1>
            Name: {item.name.first} {item.name.last}
          </h1>
          <h2>Email: {item.email}</h2>
          <h2>Age: {item.dob.age}</h2>
          <h2>Phone: {item.phone}</h2>
          <h2>Country: {item.location.country}</h2>
          <h2>Gender: {item.gender}</h2>
        </div>
      ))}
    </div>
  );
};

export default App;
