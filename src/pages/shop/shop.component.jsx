import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

import './shop.styles.scss';

const ShopPage = ({ collections }) => {
  return (
    <div className="shop">
      <CollectionsOverview />
    </div>
  );
};

const mapStateToProps = ({ shop: { collections } }) => ({
  collections,
});

export default connect(mapStateToProps)(ShopPage);
