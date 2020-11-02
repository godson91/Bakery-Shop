import { connect } from 'react-redux';

import CollectionsPreview from '../collections-preview/collections-preview.component';

import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-preview">
      {collections.map(({ id, ...otherProps }) => (
        <CollectionsPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = ({ shop: { collections } }) => ({
  collections,
});

export default connect(mapStateToProps)(CollectionsOverview);
