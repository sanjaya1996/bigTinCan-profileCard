import React from 'react';

import './input.css';

export type InputIdType =
  | 'name'
  | 'email'
  | 'street'
  | 'suite'
  | 'city'
  | 'zipCode'
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
  return (
    <div className='formGroup'>
      <div className='formLabel'>
        <label htmlFor='name'>{label}</label>
      </div>
      <div className='formInput'>
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          placeholder={placeHolder}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange(id, e.target.value)
          }
        />
      </div>
    </div>
  );
};

export default Input;
