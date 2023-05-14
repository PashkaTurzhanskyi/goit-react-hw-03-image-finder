import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ images, onChoseImage }) => (
  <ul className={css.ImageGallery}>
    {images.map(image => (
      <ImageGalleryItem
        key={image.id}
        small={image.webformatURL}
        large={image.largeImageURL}
        onChoseImage={onChoseImage}
      />
    ))}
  </ul>
);
