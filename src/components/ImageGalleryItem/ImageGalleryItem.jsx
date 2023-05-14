import React from 'react';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ small, large, onChoseImage }) => (
  <li className={css.ImageGalleryItem}>
    <img
      className={css.ImageGalleryItemImage}
      src={small}
      alt=""
      onClick={() => onChoseImage(large)}
    />
  </li>
);
