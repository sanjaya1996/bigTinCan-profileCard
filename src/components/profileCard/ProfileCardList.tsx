import React from 'react';
import ProfileCard from './ProfileCard';

import './profileCard.css';

const ProfileCardList: React.FC = () => {
  return (
    <div className='cardList'>
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
    </div>
  );
};

export default ProfileCardList;
