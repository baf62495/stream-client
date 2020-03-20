import React from 'react';
import SubmitButton from '../../elements/SubmitButton/SubmitButton';

export default function BaseTableRowForm(props) {
  const handleSubmit = e => {
    e.preventDefault();

    const newLead = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      city: e.target.city.value,
      state: e.target.state.value,
      pipeline_id: props.pipeline_id
    };

    props.submitNewLead(newLead);
  };

  return (
    <form role='row' className='BaseTable__row' onSubmit={e => handleSubmit(e)}>
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
      <input
        type='text'
        name='state'
        id='state'
        role='gridcell'
        className='BaseTable__row-cell cell-sz-med'
        required
      ></input>
      <input
        type='text'
        name='city'
        id='city'
        role='gridcell'
        className='BaseTable__row-cell cell-sz-med'
        required
      ></input>
      <SubmitButton />
    </form>
  );
}
