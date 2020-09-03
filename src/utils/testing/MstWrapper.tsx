import React from 'react';
import { Provider, rootStore } from '../../models/root';

/**
 * This component is to wrap the test component with mobx state tree provider
 * @param param0 
 */
const MstWrapper = ({
  children
}: {
  children: Element,
}) => {
  return (
    <Provider value={rootStore}>
      {children}
    </Provider>
  )
};

export default MstWrapper;
