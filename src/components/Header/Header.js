import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='stream-header'>
      <Link className='stream-header-logo' to='/'>
        <strong>Stream</strong>
      </Link>
    </div>
  );
}
