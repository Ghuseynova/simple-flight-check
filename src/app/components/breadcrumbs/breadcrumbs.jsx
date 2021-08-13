import React from 'react';

import './breadcrumbs.scss';

const Breadcrumbs = () => {
  return (
    <div className="breadcrumb">
      <a href="/" className="breadcrumb__link">
        Вылеты{' '}
      </a>
      <a href="/" className="breadcrumb__link">
        SVO - JFK{' '}
      </a>
    </div>
  );
};

export default Breadcrumbs;
