import React from 'react';
import './BaseTableRow.css';
import BaseTableRowEditForm from '../BaseTableRowEditForm/BaseTableRowEditForm';

export default class BaseTableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBeingEdited: false
    };
  }

  toggleEditLeadForm = e => {
    this.setState({
      isBeingEdited: !this.state.isBeingEdited
    });
  };

  render() {
    const { isBeingEdited } = this.state;
    const lead = {
      id: this.props.id,
      name: this.props.name,
      phone: this.props.phone,
      email: this.props.email,
      city: this.props.city,
      state: this.props.state
    };

    if (!isBeingEdited) {
      return (
        <div role='row' className='BaseTable__row'>
          {/* <div role='gridcell' className='BaseTable__row-cell cell-sz-xs'>
            <input type='checkbox'></input>
          </div> */}
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
            {lead.city}
          </div>
          <div role='gridcell' className='BaseTable__row-cell cell-sz-med'>
            {lead.state}
          </div>
          <button onClick={e => this.toggleEditLeadForm(e)}>Edit</button>
          <button onClick={e => this.props.deleteLead(e, this.props.id)}>
            Delete
          </button>
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
