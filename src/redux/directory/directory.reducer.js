import React from 'react';

import { ReactComponent as Cookies } from '../../assets/cookies.svg';
import { ReactComponent as CupCakes } from '../../assets/cupcakes.svg';
import { ReactComponent as Puddings } from '../../assets/pudding.svg';
import { ReactComponent as Pies } from '../../assets/pies.svg';
import { ReactComponent as Cakes } from '../../assets/cake.svg';

const INITIAL_STATE = {
  products: [
    {
      title: 'Cookies',
      id: 1,
      image: <Cookies />,
      linkUrl: 'shop/cookies',
    },
    {
      title: 'Cup Cakes',
      id: 2,
      image: <CupCakes />,
      linkUrl: 'shop/cupcakes',
    },
    {
      title: 'Puddings',
      id: 3,
      image: <Puddings />,
      linkUrl: 'shop/puddings',
    },
    {
      title: 'Pies',
      id: 4,
      image: <Pies />,
      linkUrl: 'shop/pies',
    },
    {
      title: 'Cakes',
      id: 5,
      image: <Cakes />,
      linkUrl: 'shop/cakes',
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
