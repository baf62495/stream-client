import React from 'react';
import './DropDownMenu.css';

export default function DropDownMenu(props) {
  const listItems = props.listItems.map((item, key) => (
    <li key={key}>{item}</li>
  ));

  return <ul className='drop-down__menu'>{listItems}</ul>;
}
