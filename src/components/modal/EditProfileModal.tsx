import React, { useState } from 'react';
import ModalLayout from './ModalLayout';

import './modal.css';
import Input, { InputIdType } from '../Input/Input';
import { useDispatch } from 'react-redux';

import * as profilesActions from '../../store/actions/profiles/profileActions';

interface IModalProps {
  handleClose: () => void;
}

const EditProfileModal: React.FC<IModalProps> = ({ handleClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [street, setStreet] = useState('');
  const [suite, setSuite] = useState('');
  const [city, setCity] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [profilePic, setProfilePic] = useState('');

  const dispatch = useDispatch();

  const submitHandler = () => {
    const isValid = (value: string) => {
      return value.trim().length > 0 ? true : false;
    };

    const formIsValid =
      isValid(name) &&
      isValid(email) &&
      isValid(street) &&
      isValid(suite) &&
      isValid(city) &&
      isValid(zipcode) &&
      isValid(phone) &&
      isValid(website);

    if (!formIsValid) {
      return alert('Form is not Valid, Make sure all fields are not empty');
    }

    dispatch(
      profilesActions.createProfile({
        name,
        email,
        street,
        suite,
        city,
        zipcode,
        phone,
        website,
      })
    );

    handleClose();
  };

  const textChangeHandler = (id: InputIdType, value: string) => {
    switch (id) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'street':
        setStreet(value);
        break;
      case 'suite':
        setSuite(value);
        break;
      case 'city':
        setCity(value);
        break;
      case 'zipcode':
        setZipcode(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'website':
        setWebsite(value);
        break;
      case 'profilePic':
        setProfilePic(value);
        break;
      default:
        break;
    }
  };

  return (
    <ModalLayout>
      <div className='editProfile'>
        <span className='close' onClick={handleClose}>
          &times;
        </span>
        <h1>Add a new Profile</h1>
        <form className='profileForm'>
          <Input
            label='Name'
            type='text'
            id='name'
            name='name'
            value={name}
            placeHolder='Your name...'
            handleChange={textChangeHandler}
          />

          <Input
            label='Profile Picture'
            type='file'
            id='profilePic'
            name='profilePic'
            value={profilePic}
            placeHolder='Your picture...'
            handleChange={textChangeHandler}
          />

          <Input
            label='Email'
            type='text'
            id='email'
            name='email'
            value={email}
            placeHolder='Your email...'
            handleChange={textChangeHandler}
          />

          <div className='formGroup'>
            <div className='formLabel'>
              <label htmlFor='homeAddress'>Home Address</label>
            </div>
            <div className='addressGroup'>
              <div className='row'>
                <div className='column'>
                  <Input
                    label='Street'
                    type='text'
                    id='street'
                    name='street'
                    value={street}
                    placeHolder='Street name...'
                    handleChange={textChangeHandler}
                  />
                </div>
                <div className='column'>
                  <Input
                    label='Appartment / Suite'
                    type='text'
                    id='suite'
                    name='suite'
                    value={suite}
                    placeHolder='Appartment, Suite, etc...'
                    handleChange={textChangeHandler}
                  />
                </div>
              </div>

              <div className='row'>
                <div className='column'>
                  <Input
                    label='City'
                    type='text'
                    id='city'
                    name='city'
                    value={city}
                    placeHolder='Your city...'
                    handleChange={textChangeHandler}
                  />
                </div>
                <div className='column'>
                  <Input
                    label='Zip Code'
                    type='text'
                    id='zipcode'
                    name='zipcode'
                    value={zipcode}
                    placeHolder='Your zipCode...'
                    handleChange={textChangeHandler}
                  />
                </div>
              </div>
            </div>
          </div>

          <Input
            label='Phone Number'
            type='text'
            id='phone'
            name='phoneNumber'
            value={phone}
            placeHolder='Your name...'
            handleChange={textChangeHandler}
          />

          <Input
            label='Website'
            type='text'
            id='website'
            name='website'
            value={website}
            placeHolder='Your website url...'
            handleChange={textChangeHandler}
          />

          <div className='buttonsContainer'>
            <div className='cancelButton'>
              <button type='button' onClick={handleClose}>
                Cancel
              </button>
            </div>
            <div className='submitButton'>
              <button type='button' onClick={submitHandler}>
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
