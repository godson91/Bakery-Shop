import { combineReducers } from 'redux';

import navReducer from './nav/nav.reducer';
import directoryReducer from './directory/directory.reducer';

const rootReducer = combineReducers({
  nav: navReducer,
  directory: directoryReducer,
});

export default rootReducer;
