import React from 'react';
import Header from '../../components/Header/Header';
import './LandingPage.css';

export default function LandingPage(props) {
  return (
    <div className='landing-page'>
      <Header />
      <div className='landing-page--container'>
        <h1>Handle Leads With Stream</h1>
        <p>Streamline your outbound team's leads and interactions.</p>
        <button
          className='stream-btn stream-btn--primary'
          onClick={e => props.history.push('/pipelines')}
        >
          Enter
        </button>
      </div>
      <div className='divider--silver'></div>
    </div>
  );
}
