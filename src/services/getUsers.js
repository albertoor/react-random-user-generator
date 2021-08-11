const formatData = apiResponse => {
  const data = apiResponse;
  return data;
};

const getUsers = () => {
  return fetch('https://randomuser.me/api/?results=20')
    .then(res => res.json())
    .then(formatData);
};

export default getUsers;
