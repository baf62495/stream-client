import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import PipelineDashboard from './pages/PipelineDashboard/PipelineDashboard';
import AddNewPipelinePage from './pages/AddNewPipelinePage/AddNewPipelinePage';
import SubmitButton from './elements/SubmitButton/SubmitButton';
import SearchBar from './elements/SearchBar/SearchBar';
import DropDownMenu from './elements/DropDownMenu/DropDownMenu';
import AddNewLeadButton from './elements/AddNewLeadButton/AddNewLeadButton';
import PipelinesHeader from './components/PipelinesHeader/PipelinesHeader';
import Header from './components/Header/Header';
import BaseTableRowForm from './components/BaseTableRowForm/BaseTableRowForm';
import BaseTableRowEditForm from './components/BaseTableRowEditForm/BaseTableRowEditForm';
import BaseTableRow from './components/BaseTableRow/BaseTableRow';
import BaseTableHead from './components/BaseTableHead/BaseTableHead';
import BaseTable from './components/BaseTable/BaseTable';

describe('App Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('Pages Folder', () => {
  describe('LandingPage Component', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
        <BrowserRouter>
          <App>
            <LandingPage />
          </App>
        </BrowserRouter>,
        div
      );
      ReactDOM.unmountComponentAtNode(div);
    });
  });

  describe('PipelineDashboard Component', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
        <BrowserRouter>
          <App>
            <PipelineDashboard />
          </App>
        </BrowserRouter>,
        div
      );
      ReactDOM.unmountComponentAtNode(div);
    });
  });

  describe('AddNewPipelinePage Component', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
        <BrowserRouter>
          <App>
            <AddNewPipelinePage />
          </App>
        </BrowserRouter>,
        div
      );
      ReactDOM.unmountComponentAtNode(div);
    });
  });
});

describe('Elements Folder', () => {
  describe('SubmitButton Component', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
        <BrowserRouter>
          <App>
            <SubmitButton />
          </App>
        </BrowserRouter>,
        div
      );
      ReactDOM.unmountComponentAtNode(div);
    });
  });

  describe('SearchBar Component', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
        <BrowserRouter>
          <App>
            <SearchBar />
          </App>
        </BrowserRouter>,
        div
      );
      ReactDOM.unmountComponentAtNode(div);
    });
  });

  describe('DropDownMenu Component', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
        <BrowserRouter>
          <App>
            <DropDownMenu />
          </App>
        </BrowserRouter>,
        div
      );
      ReactDOM.unmountComponentAtNode(div);
    });
  });

  describe('AddNewLeadButton Component', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
        <BrowserRouter>
          <App>
            <AddNewLeadButton />
          </App>
        </BrowserRouter>,
        div
      );
      ReactDOM.unmountComponentAtNode(div);
    });
  });
});

describe('Components Folder', () => {
  describe('PipelinesHeader Component', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
        <BrowserRouter>
          <App>
            <PipelinesHeader />
          </App>
        </BrowserRouter>,
        div
      );
      ReactDOM.unmountComponentAtNode(div);
    });
  });

  describe('Header Component', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
        <BrowserRouter>
          <App>
            <Header />
          </App>
        </BrowserRouter>,
        div
      );
      ReactDOM.unmountComponentAtNode(div);
    });
  });

  describe('BaseTableRowForm Component', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
        <BrowserRouter>
          <App>
            <BaseTableRowForm />
          </App>
        </BrowserRouter>,
        div
      );
      ReactDOM.unmountComponentAtNode(div);
    });
  });

  describe('BaseTableRowEditForm Component', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
        <BrowserRouter>
          <App>
            <BaseTableRowEditForm />
          </App>
        </BrowserRouter>,
        div
      );
      ReactDOM.unmountComponentAtNode(div);
    });
  });

  describe('BaseTableRow Component', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
        <BrowserRouter>
          <App>
            <BaseTableRow />
          </App>
        </BrowserRouter>,
        div
      );
      ReactDOM.unmountComponentAtNode(div);
    });
  });

  describe('BaseTableHead Component', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
        <BrowserRouter>
          <App>
            <BaseTableHead />
          </App>
        </BrowserRouter>,
        div
      );
      ReactDOM.unmountComponentAtNode(div);
    });
  });

  describe('BaseTable Component', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
        <BrowserRouter>
          <App>
            <BaseTable />
          </App>
        </BrowserRouter>,
        div
      );
      ReactDOM.unmountComponentAtNode(div);
    });
  });
});
