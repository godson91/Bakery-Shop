import React from 'react';

import './directory-item.styles.scss';

const DirectoryItem = ({ image, title }) => (
  <div className="directory-item">
    <div className="image">
      <span>{image}</span>
    </div>
    <h3>{title}</h3>
  </div>
);

export default DirectoryItem;
