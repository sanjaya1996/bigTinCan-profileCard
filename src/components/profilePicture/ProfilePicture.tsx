import React from 'react';

import './profilePicture.css';

interface IProfilePicProps {
  imgSrc: string;
}
const ProfilePicture: React.FC<IProfilePicProps> = ({ imgSrc }) => {
  return (
    <div className='profilePic'>
      <img src={imgSrc} alt='profilePic' />
    </div>
  );
};

export default ProfilePicture;
