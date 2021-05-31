import React from 'react';

import './input.css';

export type InputIdType =
  | 'name'
  | 'email'
  | 'street'
  | 'suite'
  | 'city'
  | 'zipcode'
  | 'phone'
  | 'website'
  | 'profilePic';

interface IInputProps {
  label: string;
  id: InputIdType;
  type: string;
  name: string;
  value: string;
  placeHolder: string;
  handleChange: (id: InputIdType, value: string) => void;
}

const Input: React.FC<IInputProps> = ({
  label,
  id,
  type,
  name,
  value,
  placeHolder,
  handleChange,
}) => {
  const fileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      handleChange(id, url);
    } else {
      console.log('No file selected');
    }
  };

  return (
    <div className='formGroup'>
      <div className='formLabel'>
        <label htmlFor='name'>{label}</label>
      </div>
      <div className='formInput'>
        {type === 'file' ? (
          <input type={type} id={id} name={name} onChange={fileChangeHandler} />
        ) : (
          <input
            type={type}
            id={id}
            name={name}
            value={value}
            placeholder={placeHolder}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(id, event.target.value)
            }
          />
        )}
      </div>
    </div>
  );
};

export default Input;
