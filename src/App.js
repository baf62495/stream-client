import React from 'react';
import config from './config';
import { Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import PipelineDashboard from './pages/PipelineDashboard/PipelineDashboard';
import AddNewPipelinePage from './pages/AddNewPipelinePage/AddNewPipelinePage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leads: [],
      pipelines: [],
      users: props.users,
      searchInput: '',
      isAddingNewLead: false
    };
  }

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_BASE_URL}/pipelines`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${config.API_KEY}`
        }
      }),
      fetch(`${config.API_BASE_URL}/leads`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${config.API_KEY}`
        }
      })
    ])
      .then(([pipelinesRes, leadsRes]) => {
        if (!pipelinesRes.ok)
          return pipelinesRes.json().then(e => Promise.reject(e));
        if (!leadsRes.ok) return leadsRes.json().then(e => Promise.reject(e));
        return Promise.all([pipelinesRes.json(), leadsRes.json()]);
      })
      .then(([pipelines, leads]) => {
        this.setState({ pipelines, leads });
      })
      .catch(error => {
        console.error({ error });
      });
  }

  updateSearchInput = input => {
    this.setState({
      searchInput: input
    });
  };

  filterLeadsForPipeline = (leads, pipeline_id) =>
    !pipeline_id
      ? leads
      : leads.filter(lead => lead.pipeline_id === pipeline_id);

  toggleAddLeadForm = () => {
    this.setState({
      isAddingNewLead: !this.state.isAddingNewLead
    });
  };

  submitNewLead = (e, pipeline_id) => {
    e.preventDefault();

    const newLead = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      status: e.target.status.value,
      city: e.target.city.value,
      state: e.target.state.value,
      pipeline_id: pipeline_id
    };

    this.setState({
      leads: [newLead, ...this.state.leads],
      isAddingNewLead: false
    });
  };

  submitNewPipeline = newPipeline => {
    this.setState({
      pipelines: [...this.state.pipelines, newPipeline]
    });
  };

  deleteLead = (e, id) => {
    e.preventDefault();

    this.setState({
      leads: this.state.leads.filter(lead => lead.id !== id)
    });
  };

  updateLead = updatedLead => {
    this.setState({
      leads: this.state.leads.map(lead =>
        lead.id !== updatedLead.id ? lead : updatedLead
      )
    });
  };

  render() {
    return (
      <React.Fragment>
        <Route exact path='/' component={LandingPage} />
        <Route
          exact
          path='/pipelines'
          render={rprops => (
            <PipelineDashboard
              {...rprops}
              leads={this.state.leads}
              pipelines={this.state.pipelines}
              users={this.state.users}
              searchInput={this.state.searchInput}
              isAddingNewLead={this.state.isAddingNewLead}
              updateSearchInput={this.updateSearchInput}
              toggleAddLeadForm={this.toggleAddLeadForm}
              submitNewLead={this.submitNewLead}
              filterLeadsForPipeline={this.filterLeadsForPipeline}
              deleteLead={this.deleteLead}
              updateLead={this.updateLead}
            />
          )}
        />
        <Route
          exact
          path='/new-pipeline'
          render={rprops => (
            <AddNewPipelinePage
              {...rprops}
              submitNewPipeline={this.submitNewPipeline}
            />
          )}
        />
        <Route
          exact
          path='/pipelines/:id'
          render={rprops => (
            <PipelineDashboard
              {...rprops}
              leads={this.state.leads}
              pipelines={this.state.pipelines}
              users={this.state.users}
              searchInput={this.state.searchInput}
              isAddingNewLead={this.state.isAddingNewLead}
              updateSearchInput={this.updateSearchInput}
              toggleAddLeadForm={this.toggleAddLeadForm}
              submitNewLead={this.submitNewLead}
              filterLeadsForPipeline={this.filterLeadsForPipeline}
              deleteLead={this.deleteLead}
              updateLead={this.updateLead}
            />
          )}
        />
      </React.Fragment>
    );
  }
}

export default App;
