import React from 'react';
import './PageTitleHeader.css';

export default function PageTitleHeader(props) {
  return (
    <div className='page-header__title'>
      <p>{props.title}</p>
    </div>
  );
}
