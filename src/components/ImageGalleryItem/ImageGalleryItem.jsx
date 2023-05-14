import React from 'react';

export const ImageGalleryItem = ({ small, large, onChoseImage }) => (
  <li className="gallery-item">
    <img src={small} alt="" onClick={() => onChoseImage(large)} />
  </li>
);
