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
    updateLead,
    onSort,
    setArrowClass,
    sortedColumn,
    pipelines
  } = props;

  const leadsList = props.leads
    .sort((a, b) => {
      if (sortedColumn === null) {
        return a.date_created > b.date_created
          ? -1
          : a.date_created < b.date_created
          ? 1
          : 0;
      }
      return null;
    })
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
        pipelines={pipelines}
        deleteLead={deleteLead}
        updateLead={updateLead}
      />
    ));

  return (
    <div role='table' className='BaseTable'>
      <BaseTableHead onSort={onSort} setArrowClass={setArrowClass} />
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
