import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';

export const ImageGallery = ({ images, onChoseImage }) => (
  <ul className="gallery">
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
