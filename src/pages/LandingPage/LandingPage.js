import React from 'react';
import './LandingPage';

export default function LandingPage(props) {
  return (
    <div className='landing-page'>
      <h1>Handle Leads With Stream</h1>
      <button onClick={e => props.history.push('/pipelines')}>Enter</button>
    </div>
  );
}
