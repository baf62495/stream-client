import React from 'react';

export default function LandingPage(props) {
  return (
    <div className='landing-page'>
      <button onClick={e => props.history.push('/pipelines')}>Enter</button>
    </div>
  );
}
