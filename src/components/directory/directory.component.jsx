import React from 'react';
import products from './directory.data';

import DirectoryItem from '../directory-item/directory-item.component';
import './directory.styles.scss';

const Directory = () => (
  <div className="directory">
    <h1>Products</h1>
    <div className="directory-items">
      {products.map(({ id, ...otherProps }) => (
        <DirectoryItem key={id} {...otherProps} />
      ))}
    </div>
  </div>
);

export default Directory;
