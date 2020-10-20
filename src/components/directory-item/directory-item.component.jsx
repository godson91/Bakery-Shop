import React from 'react';
import { withRouter } from 'react-router-dom';

import './directory-item.styles.scss';

const DirectoryItem = ({ image, title, linkUrl }) => {
  return (
    <div className="directory-item">
      <div className="image">
        <span className="dirBtns">{image}</span>
      </div>
      <h3>{title}</h3>
    </div>
  );
};

export default withRouter(DirectoryItem);
