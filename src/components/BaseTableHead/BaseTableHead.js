import React from 'react';
import './BaseTableHead.css';

export default function BaseTableHead() {
  return (
    <div role='row' className='BaseTable__header'>
      {/* <div role='gridcell' className='BaseTable__header-cell cell-sz-xs'>
        <input type='checkbox'></input>
      </div> */}
      <div
        role='gridcell'
        className='BaseTable__header-cell BaseTable__header-cell--sorting cell-sz-med'
      >
        Name
        {/* <div className='BaseTable__sort-indicator BaseTable__sort-indicator--descending'>
          ↓
        </div> */}
      </div>
      <div
        role='gridcell'
        className='BaseTable__header-cell BaseTable__header-cell--sortable cell-sz-med'
      >
        Number
      </div>
      <div
        role='gridcell'
        className='BaseTable__header-cell BaseTable__header-cell--sortable cell-sz-lg'
      >
        Email
      </div>
      <div
        role='gridcell'
        className='BaseTable__header-cell BaseTable__header-cell--sortable cell-sz-med'
      >
        City
      </div>
      <div
        role='gridcell'
        className='BaseTable__header-cell BaseTable__header-cell--sortable cell-sz-med'
      >
        State
      </div>
    </div>
  );
}
