import React from 'react';

import './button.scss';

const Button = ({ type, text, className, hasOnClick, onClick }) => {
  return hasOnClick ? (
    <button
      type={type}
      className={`btn ${className}`}
      onClick={() => {
        onClick();
      }}
    >
      {text}
    </button>
  ) : (
    <button type={type} className={`btn ${className}`}>
      {text}
    </button>
  );
};

export default Button;
