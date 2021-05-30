import React from 'react';
import Profile from '../../models/Profile';
import ProfileCard from './ProfileCard';

import './profileCard.css';

interface IProfileListProps {
  profiles: Profile[];
  loading?: boolean;
  error?: string;
}

const ProfileCardList: React.FC<IProfileListProps> = ({
  profiles,
  loading,
  error,
}) => {
  return (
    <div className='cardList'>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : profiles.length === 0 ? (
        <p>No Profile Found, Start Creating some</p>
      ) : (
        profiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))
      )}
    </div>
  );
};

export default ProfileCardList;
