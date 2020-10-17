import React from 'react';

import './directory-item.styles.scss';

const DirectoryItem = ({ image, title }) => {
  return (
    <div className="directory-item">
      <div className="image">
        <span className="dirBtns">{image}</span>
      </div>
      <h3>{title}</h3>
    </div>
  );
};

export default DirectoryItem;
