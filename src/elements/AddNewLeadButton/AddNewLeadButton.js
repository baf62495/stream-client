import React from 'react';

export default function AddNewLeadButton(props) {
  return (
    <button
      type='button'
      className='stream-btn stream-btn--primary'
      onClick={props.toggleAddLeadForm}
    >
      {!props.isAddingNewLead ? 'New Lead' : 'Cancel'}
    </button>
  );
}
