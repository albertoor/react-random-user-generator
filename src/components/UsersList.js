import React from 'react';
import useUsers from '../hooks/useUsers';
import User from '../components/User';

const UsersList = () => {
  const users = useUsers();

  // console.log(users);

  return (
    <>
      {users.map(item => (
        <User
          id={item.id.value}
          img={item.picture.thumbnail}
          firstName={item.name.first}
          lastName={item.name.last}
          email={item.email}
          age={item.dob.age}
          phone={item.phone}
          country={item.location.country}
          gender={item.gender}
        />
      ))}
    </>
  );
};

export default UsersList;
