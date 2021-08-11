import React, { useState, useEffect } from 'react';
import getUsers from '../services/getUsers';

const useUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(data => {
      setUsers(data.results);
    });
  }, []);

  return users;
};

export default useUsers;
