import React from 'react';
import './BaseTable.css';
import BaseTableRow from '../BaseTableRow/BaseTableRow';
import BaseTableHead from '../BaseTableHead/BaseTableHead';
import BaseTableRowForm from '../BaseTableRowForm/BaseTableRowForm';

export default function BaseTable(props) {
  const {
    searchInput,
    isAddingNewLead,
    submitNewLead,
    deleteLead,
    pipeline_id,
    updateLead
  } = props;
  const leadsList = props.leads
    .filter(
      lead =>
        lead.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        lead.email.toLowerCase().includes(searchInput.toLowerCase()) ||
        lead.city.toLowerCase().includes(searchInput.toLowerCase()) ||
        lead.state.toLowerCase().includes(searchInput.toLowerCase()) ||
        lead.phone.includes(searchInput)
    )
    .map((lead, key) => (
      <BaseTableRow
        {...lead}
        key={key}
        deleteLead={deleteLead}
        updateLead={updateLead}
      />
    ));

  return (
    <div role='table' className='BaseTable'>
      <BaseTableHead />
      {isAddingNewLead ? (
        <BaseTableRowForm
          submitNewLead={submitNewLead}
          pipeline_id={pipeline_id}
        />
      ) : null}
      {leadsList}
    </div>
  );
}
