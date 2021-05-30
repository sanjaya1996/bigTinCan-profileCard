import React from 'react';
import ModalLayout from './ModalLayout';

import './modal.css';

interface IModalProps {
  onCloseModal: () => void;
  onSubmit: (id?: string) => void;
}

const EditProfileModal: React.FC<IModalProps> = ({
  onCloseModal,
  onSubmit,
}) => {
  return (
    <ModalLayout>
      <div className='editProfile'>
        <span className='close' onClick={onCloseModal}>
          &times;
        </span>
        <h1>Add a new Profile</h1>
        <form className='profileForm'>
          <div className='formGroup'>
            <div className='formLabel'>
              <label htmlFor='firstName'>First Name</label>
            </div>
            <div className='formInput'>
              <input
                type='text'
                id='fName'
                name='firstName'
                placeholder='Your first name...'
              />
            </div>
          </div>
          <div className='formGroup'>
            <div className='formLabel'>
              <label htmlFor='lastName'>Last Name</label>
            </div>
            <div className='formInput'>
              <input
                type='text'
                id='lName'
                name='lastName'
                placeholder='Your last name...'
              />
            </div>
          </div>

          <div className='formGroup'>
            <div className='formLabel'>
              <label htmlFor='profilePic'>Profile Picture</label>
            </div>
            <div className='formInput'>
              <input
                type='file'
                id='lName'
                name='lastName'
                placeholder='Your last name...'
              />
            </div>
          </div>

          <div className='formGroup'>
            <div className='formLabel'>
              <label htmlFor='email'>Email</label>
            </div>
            <div className='formInput'>
              <input
                type='text'
                id='email'
                name='email'
                placeholder='Your email...'
              />
            </div>
          </div>

          <div className='formGroup'>
            <div className='formLabel'>
              <label htmlFor='homeAddress'>Home Address</label>
            </div>
            <div className='formInput'>
              <input
                type='text'
                id='homeAddress'
                name='homeAddress'
                placeholder='Your address...'
              />
            </div>
          </div>

          <div className='formGroup'>
            <div className='formLabel'>
              <label htmlFor='phoneNumber'>Phone Number</label>
            </div>
            <div className='formInput'>
              <input
                type='text'
                id='phoneNumber'
                name='phoneNumber'
                placeholder='Your name...'
              />
            </div>
          </div>

          <div className='formGroup'>
            <div className='formLabel'>
              <label htmlFor='website'>Website</label>
            </div>
            <div className='formInput'>
              <input
                type='text'
                id='website'
                name='website'
                placeholder='Your website url...'
              />
            </div>
          </div>

          <div className='buttonsContainer'>
            <div className='cancelButton'>
              <button type='button' onClick={onCloseModal}>
                Cancel
              </button>
            </div>
            <div className='submitButton'>
              <button type='button' onClick={() => onSubmit()}>
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </ModalLayout>
  );
};

export default EditProfileModal;
