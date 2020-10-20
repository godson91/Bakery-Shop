import { combineReducers } from 'redux';

import navReducer from './nav/nav.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const rootReducer = combineReducers({
  nav: navReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default rootReducer;
