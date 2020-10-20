import React from 'react';
import { withRouter } from 'react-router-dom';

import './directory-item.styles.scss';

const DirectoryItem = ({ image, title, linkUrl, history, match }) => {
  console.log(match);
  return (
    <div
      className="directory-item"
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div className="image">
        <span className="dirBtns">{image}</span>
      </div>
      <h3>{title}</h3>
    </div>
  );
};

export default withRouter(DirectoryItem);
