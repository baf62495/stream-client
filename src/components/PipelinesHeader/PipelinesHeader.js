import React from 'react';
import './PipelinesHeader.css';
import { NavLink } from 'react-router-dom';
import SearchBar from '../../elements/SearchBar/SearchBar';
import AddNewLeadButton from '../../elements/AddNewLeadButton/AddNewLeadButton';

export default function PipelinesHeader(props) {
  const pipelineTabs = props.pipelines.map((pipeline, key) => (
    <NavLink
      className='stream-tabs__tab nudge-down--1'
      key={key}
      to={`/pipelines/${pipeline.id}`}
    >
      {pipeline.title}
    </NavLink>
  ));

  return (
    <div className='pipelines-header'>
      <nav className='stream-tabs'>
        <NavLink
          className='stream-tabs__tab nudge-down--1'
          exact
          to={'/pipelines'}
        >
          All
        </NavLink>
        {pipelineTabs}
        <button onClick={e => props.history.push('/new-pipeline')}>+</button>
      </nav>
      <div className='mw38 stream-search-add'>
        <SearchBar
          searchInput={props.searchInput}
          updateSearchInput={props.updateSearchInput}
        />
        <AddNewLeadButton
          toggleAddLeadForm={props.toggleAddLeadForm}
          isAddingNewLead={props.isAddingNewLead}
        />
      </div>
    </div>
  );
}
