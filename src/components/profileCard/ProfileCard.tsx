import React from 'react';
import ProfilePicture from '../profilePicture/ProfilePicture';

import './profileCard.css';
const ProfileCard: React.FC = () => {
  return (
    <div className='card'>
      <div className='profileHeader'>
        <ProfilePicture />
      </div>
      <div className='profileBody'>
        <h1 className='bodyHeaderText'>Lois Zemlak</h1>
        <li className='userInfo'>
          <span>
            <i className='fas fa-solid fa-envelope'></i>
          </span>
          <span>Maida.Becker98@gmail.com</span>
        </li>

        <li className='userInfo'>
          <span>
            <i className='fas fa-solid fa-address-book'></i>
          </span>
          <span>Cremin Plains St, Apt.462, North Connortown, 99373</span>
        </li>

        <li className='userInfo'>
          <span>
            <i className='fas fa-solid fa-phone'></i>
            (293) 414-8005
          </span>
        </li>

        <li className='userInfo'>
          <span>
            <i className='fas fa-solid fa-globe'></i>
          </span>
          <span>
            <a href='marianne.org'>marianne.org</a>
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
    </div>
  );
};

export default ProfileCard;
