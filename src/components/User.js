import React from 'react';

const User = ({
  id,
  picture,
  firstName,
  lastName,
  email,
  age,
  phone,
  country,
  gender
}) => {
  return (
    <>
      <div key={id}>
        <img src={picture} />
        <h1>
          Name: {firstName} {lastName}
        </h1>
        <h2>Email: {email}</h2>
        <h2>Age: {age}</h2>
        <h2>Phone: {phone}</h2>
        <h2>Country: {country}</h2>
        <h2>Gender: {gender}</h2>
      </div>
    </>
  );
};

export default User;
