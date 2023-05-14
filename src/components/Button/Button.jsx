import React from 'react';
import css from './Button.module.css';

export const Button = ({ onPageChange }) => (
  <button className={css.Button} type="button" onClick={onPageChange}>
    Load more
  </button>
);
