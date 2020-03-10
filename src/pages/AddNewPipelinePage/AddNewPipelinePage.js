import React from 'react';
import Header from '../../components/Header/Header';
import SubmitButton from '../../elements/SubmitButton/SubmitButton';

export default function AddNewPipelinePage(props) {
  const handleSubmit = e => {
    e.preventDefault();

    const newPipeline = {
      title: e.target.title.value,
      id: 6
    };

    props.submitNewPipeline(newPipeline);

    props.history.push(`/pipelines/${newPipeline.id}`);
  };
  return (
    <React.Fragment>
      <Header />
      <form
        role='row'
        className='new-pipeline-view'
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
        <SubmitButton />
      </form>
    </React.Fragment>
  );
}
