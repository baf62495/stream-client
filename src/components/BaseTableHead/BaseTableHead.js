import React from 'react';
import './BaseTableHead.css';

export default function BaseTableHead(props) {
  return (
    <div role='row' className='BaseTable__header'>
      <div
        role='gridcell'
        className='BaseTable__header-cell BaseTable__header-cell--sorting cell-sz-med'
        onClick={e => props.onSort(e, 'name')}
      >
        Name
        <span className={props.setArrowClass('name')}></span>
      </div>
      <div
        role='gridcell'
        className='BaseTable__header-cell BaseTable__header-cell--sortable cell-sz-med'
        onClick={e => props.onSort(e, 'phone')}
      >
        Number
        <span className={props.setArrowClass('phone')}></span>
      </div>
      <div
        role='gridcell'
        className='BaseTable__header-cell BaseTable__header-cell--sortable cell-sz-lg'
        onClick={e => props.onSort(e, 'email')}
      >
        Email
        <span className={props.setArrowClass('email')}></span>
      </div>
      <div
        role='gridcell'
        className='BaseTable__header-cell BaseTable__header-cell--sortable cell-sz-med'
        onClick={e => props.onSort(e, 'state')}
      >
        State
        <span className={props.setArrowClass('state')}></span>
      </div>
      <div
        role='gridcell'
        className='BaseTable__header-cell BaseTable__header-cell--sortable cell-sz-med'
        onClick={e => props.onSort(e, 'city')}
      >
        City
        <span className={props.setArrowClass('city')}></span>
      </div>
    </div>
  );
}
