import React from 'react';

import './profilePicture.css';

const ProfilePicture: React.FC = () => {
  return (
    <div className='profilePic'>
      <img src='/images/profilePic.jpeg' alt='profilePic' />
    </div>
  );
};

export default ProfilePicture;
