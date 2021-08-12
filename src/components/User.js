import React from 'react';
import './User.css';
import { FiMail } from 'react-icons/fi';
import { BiFemaleSign, BiWorld } from 'react-icons/bi';
import { GiMale, GiCrown } from 'react-icons/gi';
import { AiFillPhone } from 'react-icons/ai';

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
  const isMale = gender === 'male';

  return (
    <>
      <div className="user-card" key={id}>
        <img src={picture} />
        <h1>
          {firstName} {lastName}
        </h1>

        <div className="user-card-info-item">
          <i>
            <FiMail />
          </i>
          <h2>Email: {email}</h2>
        </div>
        <div className="user-card-info-item">
          <i>
            <GiCrown />
          </i>
          <h2>Age: {age}</h2>
        </div>
        <div className="user-card-info-item">
          <i>
            <AiFillPhone />
          </i>
          <h2>Phone: {phone}</h2>
        </div>
        <div className="user-card-info-item">
          <i>
            <BiWorld />
          </i>
          <h2>Country: {country}</h2>
        </div>
        {isMale ? (
          <div className="user-card-info-item">
            <i>
              <GiMale />
            </i>
            <h2>Gender: {gender}</h2>
          </div>
        ) : (
          <div className="user-card-info-item">
            <i>
              <BiFemaleSign />
            </i>
            <h2>Gender: {gender}</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default User;
