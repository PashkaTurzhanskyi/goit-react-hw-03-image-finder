import React from 'react';
import { Audio } from 'react-loader-spinner';

export const Loader = () => (
  <div>
    <Audio
      height="80"
      width="80"
      radius="9"
      color="green"
      ariaLabel="loading"
      wrapperStyle
      // wrapperClass
    />
  </div>
);
