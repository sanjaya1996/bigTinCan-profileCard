import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Profile from '../../models/Profile';
import EditProfileModal from '../modal/EditProfileModal';
import ProfilePicture from '../profilePicture/ProfilePicture';
import * as profilesActions from '../../store/actions/profiles/profileActions';

import './profileCard.css';

interface IProfileCardProps {
  profile: Profile;
}

const ProfileCard: React.FC<IProfileCardProps> = ({ profile }) => {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const {
    id,
    name,
    email,
    phone,
    profilePic,
    website,
    address: { street, city, suite, zipcode },
  } = profile;
  const addressText = `${suite}, ${street}, ${city}, ${zipcode}`;
  const profileImgSrc = profilePic || '/images/profilePic.jpeg';
  const websiteLink =
    website.startsWith('http') || website.startsWith('www.')
      ? website
      : `https://${website}`;

  const onShowModal = () => {
    setShowModal(true);
    window.onclick = function (event: MouseEvent) {
      const modal = document.getElementById('modalLayout');
      if (event.target === modal) {
        setShowModal(false);
      }
    };
  };
  const onCloseModal = () => setShowModal(false);

  const deleteProfileHandler = () => {
    if (
      window.confirm('Are you Sure? Do you really want to delete ' + name + '?')
    ) {
      dispatch(profilesActions.deleteProfile(id));
    } else {
      return console.log('Thanks for conforming.');
    }
  };

  return (
    <div className='card'>
      <div className='profileHeader'>
        <ProfilePicture imgSrc={profileImgSrc} />
      </div>
      <div className='profileBody'>
        <h1 className='bodyHeaderText'>{name}</h1>
        <li className='userInfo'>
          <span>
            <i className='fas fa-solid fa-envelope'></i>
          </span>
          <span>{email}</span>
        </li>

        <li className='userInfo'>
          <span>
            <i className='fas fa-solid fa-address-book'></i>
          </span>
          <span>{addressText}</span>
        </li>

        <li className='userInfo'>
          <span>
            <i className='fas fa-solid fa-phone'></i>
            {phone}
          </span>
        </li>

        <li className='userInfo'>
          <span>
            <i className='fas fa-solid fa-globe'></i>
          </span>
          <span>
            <a href={websiteLink}>{website}</a>
          </span>
        </li>
        <div className='companyBanner'>
          <div className='logo'>
            <img
              src='https://marvel-b1-cdn.bc0a.com/f00000000228004/4eal4a38i3ij2gt3g51zqj5p-wpengine.netdna-ssl.com/wp-content/uploads/brand-bigtincan.png'
              alt='bigitcan'
            />
          </div>
          <div className='companyInfo'></div>
        </div>
      </div>

      <div onClick={deleteProfileHandler} className='cardButton close'>
        <span>&times;</span>
      </div>
      <div onClick={onShowModal} className='cardButton edit'>
        <span>Edit</span>
      </div>
      {showModal && (
        <EditProfileModal handleClose={onCloseModal} profile={profile} />
      )}
    </div>
  );
};

export default ProfileCard;
