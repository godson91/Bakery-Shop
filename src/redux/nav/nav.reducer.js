import navActionTypes from './nav.types';

const INITIAL_STATE = {
  hidden: true,
};

const navReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case navActionTypes.TOGGLE_NAV_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default navReducer;
