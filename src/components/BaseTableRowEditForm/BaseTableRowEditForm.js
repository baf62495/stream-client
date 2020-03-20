import React from 'react';
import SubmitButton from '../../elements/SubmitButton/SubmitButton';

export default class BaseTableRowEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBeingEdited: props.isBeingEdited,
      id: props.lead.id,
      name: props.lead.name,
      phone: props.lead.phone,
      email: props.lead.email,
      city: props.lead.city,
      state: props.lead.state
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    const { id, name, phone, email, city, state } = this.state;
    const updatedLead = { id, name, phone, email, city, state };

    this.props.updateLead(updatedLead, id);
    this.props.toggleEditLeadForm();
  };

  handleChangeName = e => {
    this.setState({ name: e.target.value });
  };

  handleChangePhone = e => {
    this.setState({ phone: e.target.value });
  };

  handleChangeEmail = e => {
    this.setState({ email: e.target.value });
  };

  handleChangeCity = e => {
    this.setState({ city: e.target.value });
  };

  handleChangeState = e => {
    this.setState({ state: e.target.value });
  };

  getCities = stateId => {};

  render() {
    const { name, phone, email, city, state } = this.state;
    return (
      <form
        role='row'
        className='BaseTable__row'
        onSubmit={e => this.handleSubmit(e)}
      >
        <input
          type='text'
          name='name'
          id='name'
          role='gridcell'
          className='BaseTable__row-cell cell-sz-med'
          value={name}
          onChange={this.handleChangeName}
          required
        ></input>
        <input
          type='tel'
          name='phone'
          id='phone'
          role='gridcell'
          data-country='US'
          className='BaseTable__row-cell cell-sz-med'
          value={phone}
          onChange={this.handleChangePhone}
          required
        ></input>
        <input
          type='email'
          name='email'
          id='email'
          role='gridcell'
          className='BaseTable__row-cell cell-sz-lg'
          value={email}
          onChange={this.handleChangeEmail}
          required
        ></input>
        <input
          type='text'
          name='state'
          id='state'
          role='gridcell'
          className='BaseTable__row-cell cell-sz-med'
          value={state}
          onChange={this.handleChangeState}
          required
        ></input>
        <input
          type='text'
          name='city'
          id='city'
          role='gridcell'
          className='BaseTable__row-cell cell-sz-med'
          value={city}
          onChange={this.handleChangeCity}
          required
        ></input>
        <SubmitButton />
        <button onClick={e => this.props.toggleEditLeadForm()}>Cancel</button>
      </form>
    );
  }
}
