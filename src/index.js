import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

// New
// Attempting to contact
// Connected
// Working
// Closing
// Nurture
// DQ

const leads = [
  {
    id: 1, // required, auto generated
    name: 'Darryl Jonesy', // required
    phone: '123-456-7890', // required
    email: 'djonesy@letterkenny.com', // required
    city: 'Letterkenny', // required
    state: 'New York', // required
    cold_caller: 3, // required
    assigned_to: 1,
    status: 'New', // required, default 'New'
    pipeline_id: 1, // required, default 'null'
    date_entered: '2020/02/26 5:52 PM' // auto generated
  },
  {
    id: 2,
    name: 'Jared Pinto',
    phone: '123-456-7890',
    email: 'jpinto@letterkenny.com',
    city: 'Letterkenny',
    state: 'New York',
    cold_caller: 3,
    assigned_to: 1,
    status: 'New',
    pipeline_id: 1,
    date_entered: '2020/02/26 5:52 PM'
  },
  {
    id: 3,
    name: 'Jane Keeso',
    phone: '123-456-7890',
    email: 'jkeeso@letterkenny.com',
    city: 'Letterkenny',
    state: 'New York',
    cold_caller: 3,
    assigned_to: 2,
    status: 'New',
    pipeline_id: 2,
    date_entered: '2020/02/26 5:52 PM'
  }
];

const pipelines = [
  {
    id: 1, // required, auto generated
    title: 'New Prospects' // required
  },
  {
    id: 2,
    title: 'Test'
  }
];

const users = [
  {
    id: 1, // required, auto generated
    name: 'Jared Keeso', // required
    email: 'wayne@letterkenny.com' // required
  },
  {
    id: 2,
    name: 'Nathan Dales',
    email: 'daryl@letterkenny.com'
  },
  {
    id: 3,
    name: 'Dan Petronijevic',
    email: 'mcmurray@letterkenny.com'
  }
];

ReactDOM.render(
  <BrowserRouter>
    <App leads={leads} pipelines={pipelines} users={users} />
  </BrowserRouter>,
  document.getElementById('root')
);
