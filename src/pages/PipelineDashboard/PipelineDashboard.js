import React from 'react';
import BaseTable from '../../components/BaseTable/BaseTable';
import Header from '../../components/Header/Header';
import PipelinesHeader from '../../components/PipelinesHeader/PipelinesHeader';

export default function PipelineDashboard(props) {
  const { leads } = props;
  const pipeline_id = !props.match.params.id
    ? null
    : parseInt(props.match.params.id);
  const leadsForPipeline = props.filterLeadsForPipeline(leads, pipeline_id);
  return (
    <React.Fragment>
      <Header />
      <PipelinesHeader
        pipelines={props.pipelines}
        searchInput={props.searchInput}
        updateSearchInput={props.updateSearchInput}
        isAddingNewLead={props.isAddingNewLead}
        toggleAddLeadForm={props.toggleAddLeadForm}
        history={props.history}
      />
      <main className='app-container'>
        <BaseTable
          leads={leadsForPipeline}
          users={props.users}
          searchInput={props.searchInput}
          isAddingNewLead={props.isAddingNewLead}
          submitNewLead={props.submitNewLead}
          deleteLead={props.deleteLead}
          pipeline_id={pipeline_id}
          updateLead={props.updateLead}
        />
      </main>
    </React.Fragment>
  );
}
