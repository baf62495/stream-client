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
      isAddingNewLead: false,
      sort: {
        column: null,
        direction: 'desc'
      }
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

  submitNewLead = newLead => {
    fetch(`${config.API_BASE_URL}/leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${config.API_KEY}`
      },
      body: JSON.stringify(newLead)
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(e => Promise.reject(e));
        }
        return res.json();
      })
      .then(lead => {
        this.setState({
          leads: [lead, ...this.state.leads],
          isAddingNewLead: false
        });
      });
  };

  submitNewPipeline = newPipeline => {
    fetch(`${config.API_BASE_URL}/pipelines`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${config.API_KEY}`
      },
      body: JSON.stringify(newPipeline)
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(e => Promise.reject(e));
        }
        return res.json();
      })
      .then(pipeline => {
        this.setState({
          pipelines: [...this.state.pipelines, pipeline]
        });
      });
  };

  deleteLead = (e, id) => {
    e.preventDefault();

    fetch(`${config.API_BASE_URL}/leads/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${config.API_KEY}`
      }
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(e => Promise.reject(e));
        }
        return res;
      })
      .then(() => {
        this.setState({
          leads: this.state.leads.filter(lead => lead.id !== id)
        });
      });
  };

  updateLead = (updatedLead, id) => {
    fetch(`${config.API_BASE_URL}/leads/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${config.API_KEY}`
      },
      body: JSON.stringify(updatedLead)
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(e => Promise.reject(e));
        }
        return res;
      })
      .then(() => {
        this.setState({
          leads: this.state.leads.map(lead =>
            lead.id !== updatedLead.id ? lead : updatedLead
          )
        });
      });
  };

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

  onSort = (e, column) => {
    const direction = this.state.sort.column
      ? this.state.sort.direction === 'asc'
        ? 'desc'
        : 'asc'
      : 'desc';

    const sortedLeads = this.state.leads.sort((a, b) =>
      a[column].localeCompare(b[column])
    );

    if (direction === 'desc') {
      sortedLeads.reverse();
    }

    this.setState({
      leads: sortedLeads,
      sort: {
        column,
        direction
      }
    });
  };

  setArrowClass = column => {
    let className = 'BaseTable__sort-indicator';

    if (this.state.sort.column === column) {
      className +=
        this.state.sort.direction === 'asc'
          ? ' BaseTable__sort-indicator--ascending'
          : ' BaseTable__sort-indicator--descending';
    }

    return className;
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
              sortedColumn={this.state.sort.column}
              updateSearchInput={this.updateSearchInput}
              toggleAddLeadForm={this.toggleAddLeadForm}
              submitNewLead={this.submitNewLead}
              filterLeadsForPipeline={this.filterLeadsForPipeline}
              deleteLead={this.deleteLead}
              updateLead={this.updateLead}
              onSort={this.onSort}
              setArrowClass={this.setArrowClass}
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
              sortedColumn={this.state.sort.column}
              updateSearchInput={this.updateSearchInput}
              toggleAddLeadForm={this.toggleAddLeadForm}
              submitNewLead={this.submitNewLead}
              filterLeadsForPipeline={this.filterLeadsForPipeline}
              deleteLead={this.deleteLead}
              updateLead={this.updateLead}
              onSort={this.onSort}
              setArrowClass={this.setArrowClass}
            />
          )}
        />
      </React.Fragment>
    );
  }
}

export default App;
