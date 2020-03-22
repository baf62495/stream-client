import React from 'react';
import './BaseTableRow.css';
import BaseTableRowEditForm from '../BaseTableRowEditForm/BaseTableRowEditForm';
import DropDownMenu from '../../elements/DropDownMenu/DropDownMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

export default class BaseTableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBeingEdited: false,
      isDropDownActive: false,
      isBeingMoved: false,
      pipeline_id: props.pipeline_id
    };
  }

  handleChangePipelineId = (e, newPipelineId) => {
    const { id, name, phone, email, city, state } = this.props;
    const updatedLead = {
      id,
      name,
      phone,
      email,
      city,
      state,
      pipeline_id: newPipelineId
    };

    this.props.updateLead(updatedLead, this.props.id);
    this.toggleDropDownMenu();
  };

  toggleEditLeadForm = e => {
    this.setState({
      isBeingEdited: !this.state.isBeingEdited
    });
    if (this.state.isBeingEdited) {
      this.toggleDropDownMenu();
    }
  };

  toggleDropDownMenu = e => {
    this.setState({
      isDropDownActive: !this.state.isDropDownActive
    });
    if (this.state.isBeingMoved) {
      this.toggleMoveLead();
    }
  };

  toggleMoveLead = e => {
    this.setState({
      isBeingMoved: !this.state.isBeingMoved
    });
  };

  handleDelete = e => {
    this.props.deleteLead(e, this.props.id);
    this.toggleDropDownMenu();
  };

  render() {
    const { isBeingEdited, isDropDownActive, isBeingMoved } = this.state;
    const pipelines = this.props.pipelines;
    const lead = {
      id: this.props.id,
      name: this.props.name,
      phone: this.props.phone,
      email: this.props.email,
      city: this.props.city,
      state: this.props.state
    };

    if (!isBeingEdited) {
      const editButton = (
        <div onClick={e => this.toggleEditLeadForm(e)}>Edit</div>
      );
      const deleteButton = (
        <div onClick={e => this.handleDelete(e)}>Delete</div>
      );
      const moveButton = (
        <React.Fragment>
          <div onClick={e => this.toggleMoveLead(e)}>Move</div>
          {isBeingMoved ? (
            <DropDownMenu
              listItems={pipelines.map((pipeline, key) => {
                return (
                  <div
                    onClick={e => this.handleChangePipelineId(e, pipeline.id)}
                  >
                    {pipeline.title}, {pipeline.id}
                  </div>
                );
              })}
            />
          ) : null}
        </React.Fragment>
      );

      return (
        <div role='row' className='BaseTable__row'>
          <div role='gridcell' className='BaseTable__row-cell cell-sz-med'>
            {lead.name}
          </div>
          <div role='gridcell' className='BaseTable__row-cell cell-sz-med'>
            {lead.phone}
          </div>
          <div role='gridcell' className='BaseTable__row-cell cell-sz-lg'>
            {lead.email}
          </div>
          <div role='gridcell' className='BaseTable__row-cell cell-sz-med'>
            {lead.state}
          </div>
          <div role='gridcell' className='BaseTable__row-cell cell-sz-med'>
            {lead.city}
          </div>
          <div className='btn-group'>
            <button
              className='cell-more-btn'
              onClick={e => this.toggleDropDownMenu(e)}
            >
              <FontAwesomeIcon icon={faEllipsisH} />
            </button>
            {isDropDownActive ? (
              <DropDownMenu
                listItems={[editButton, deleteButton, moveButton]}
              />
            ) : null}
          </div>
        </div>
      );
    } else {
      return (
        <BaseTableRowEditForm
          lead={lead}
          updateLead={this.props.updateLead}
          toggleEditLeadForm={this.toggleEditLeadForm}
        />
      );
    }
  }
}
