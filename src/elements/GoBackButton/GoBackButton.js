import React from 'react';

export default function GoBackButton(props) {
  return (
    <button
      className='stream-btn stream-btn--secondary'
      onClick={e => props.history.goBack()}
    >
      {props.text}
    </button>
  );
}
