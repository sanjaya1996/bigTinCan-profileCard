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
              <label htmlFor='name'> Name</label>
            </div>
            <div className='formInput'>
              <input
                type='text'
                id='name'
                name='name'
                placeholder='Your name...'
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
            <div className='addressGroup'>
              <div className='row'>
                <div className='column'>
                  <div className='formGroup'>
                    <div className='formLabel'>
                      <label htmlFor='street'>Street</label>
                    </div>
                    <div className='formInput'>
                      <input
                        type='text'
                        id='street'
                        name='street'
                        placeholder='Street name...'
                      />
                    </div>
                  </div>
                </div>
                <div className='column'>
                  <div className='formGroup'>
                    <div className='formLabel'>
                      <label htmlFor='sute'>Appartment, Suite, etc</label>
                    </div>
                    <div className='formInput'>
                      <input
                        type='text'
                        id='suite'
                        name='suite'
                        placeholder='Appartment, Suite, etc...'
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='column'>
                  <div className='formGroup'>
                    <div className='formLabel'>
                      <label htmlFor='city'>City</label>
                    </div>
                    <div className='formInput'>
                      <input
                        type='text'
                        id='city'
                        name='city'
                        placeholder='Your city...'
                      />
                    </div>
                  </div>
                </div>
                <div className='column'>
                  <div className='formGroup'>
                    <div className='formLabel'>
                      <label htmlFor='zipCode'>Zip Code</label>
                    </div>
                    <div className='formInput'>
                      <input
                        type='text'
                        id='zipCode'
                        name='zipCode'
                        placeholder='Your zipCode...'
                      />
                    </div>
                  </div>
                </div>
              </div>
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
