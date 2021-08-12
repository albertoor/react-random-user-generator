import React from 'react';
import useUsers from '../hooks/useUsers';
import User from '../components/User';
import './UsersList.css';

const UsersList = () => {
  const users = useUsers();

  return (
    <div className="users-container">
      {users.map(item => (
        <User
          id={item.id.value}
          picture={item.picture.large}
          firstName={item.name.first}
          lastName={item.name.last}
          email={item.email}
          age={item.dob.age}
          phone={item.phone}
          country={item.location.country}
          gender={item.gender}
        />
      ))}
    </div>
  );
};

export default UsersList;
