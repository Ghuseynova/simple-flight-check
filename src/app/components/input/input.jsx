import React from 'react';

import './input.scss';
const Input = ({ type, name, value, className, onChange }) => {
  return (
    <input
      type={type}
      className={className}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
