import React from 'react';
import Header from '../../components/Header/Header';
import SubmitButton from '../../elements/SubmitButton/SubmitButton';
import './AddNewPipelinePage.css';

export default function AddNewPipelinePage(props) {
  const handleSubmit = e => {
    e.preventDefault();

    const newPipeline = {
      title: e.target.title.value,
      team_id: 1
    };

    props.submitNewPipeline(newPipeline);

    props.history.push(`/pipelines/${newPipeline.id}`);
  };

  return (
    <React.Fragment>
      <Header />
      <div className='app-container mw38 new-pipeline--container'>
        <form
          role='row'
          className='new-pipeline--form'
          onSubmit={e => handleSubmit(e)}
        >
          <div role='gridcell' className='BaseTable__row-cell cell-sz-xs'></div>
          <label htmlFor='title'>Pipeline Name</label>
          <input
            type='text'
            name='title'
            id='title'
            placeholder='Pipeline Name'
            required
          ></input>
          <div className='divider--silver'></div>
          <SubmitButton />
        </form>
      </div>
    </React.Fragment>
  );
}
