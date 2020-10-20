import React from 'react';
import { connect } from 'react-redux';

import DirectoryItem from '../directory-item/directory-item.component';
import './directory.styles.scss';

const Directory = ({ products }) => {
  return (
    <div className="directory">
      <h1>Products</h1>
      <div className="directory-items">
        {products.map(({ id, ...otherProps }) => (
          <DirectoryItem key={id} {...otherProps} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ directory: { products } }) => ({
  products,
});

export default connect(mapStateToProps)(Directory);
