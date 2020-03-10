import React from 'react';
import { states } from '../../helpers';
import SubmitButton from '../../elements/SubmitButton/SubmitButton';

export default function BaseTableRowForm(props) {
  return (
    <form
      role='row'
      className='BaseTable__row'
      onSubmit={e => props.submitNewLead(e, props.pipeline_id)}
    >
      {/* <div role='gridcell' className='BaseTable__row-cell cell-sz-xs'></div> */}
      <input
        type='text'
        name='name'
        id='name'
        role='gridcell'
        className='BaseTable__row-cell cell-sz-med'
        required
      ></input>
      <input
        type='tel'
        name='phone'
        id='phone'
        role='gridcell'
        data-country='US'
        className='BaseTable__row-cell cell-sz-med'
        required
      ></input>
      <input
        type='email'
        name='email'
        id='email'
        role='gridcell'
        className='BaseTable__row-cell cell-sz-lg'
        required
      ></input>
      <select
        name='status'
        id='status'
        role='gridcell'
        className='BaseTable__row-cell cell-sz-sm'
        required
      >
        <option value='New'>New</option>
        <option value='test'>test</option>
        <option value='test'>test</option>
        <option value='test'>test</option>
      </select>
      <select
        name='city'
        id='city'
        defaultValue=''
        role='gridcell'
        className='BaseTable__row-cell cell-sz-med'
        required
      >
        <option value='' disabled>
          Select...
        </option>
        <option value='Letterkenny'>Letterkenny</option>
        <option value='test'>test</option>
        <option value='test'>test</option>
        <option value='test'>test</option>
      </select>
      <select
        name='state'
        id='state'
        defaultValue=''
        role='gridcell'
        className='BaseTable__row-cell cell-sz-med'
        required
      >
        <option value='' disabled>
          Select...
        </option>
        {states.map((state, key) => (
          <option value={state.name} key={key}>
            {state.name}
          </option>
        ))}
      </select>
      <SubmitButton />
    </form>
  );
}
