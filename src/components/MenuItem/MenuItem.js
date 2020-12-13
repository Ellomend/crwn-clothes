import React from 'react';

import './MenuItem.scss'

const MenuItem = ({title, subtitle, image, size}) => {
  return (
    <div className={`${size || ''} menu-item`}>
      <div className="background-image" style={{
        backgroundImage: `url(${image})`
      }}>
      </div>
      <div className="content">
        <h1 className="title"> { title.toUpperCase() } </h1>
        <span className="subtitle">{ subtitle }</span>
      </div>
    </div>
  );
};

export default MenuItem;
