import React from 'react';
import { states } from '../../helpers';
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
      status: props.lead.status,
      city: props.lead.city,
      state: props.lead.state
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    const { id, name, phone, email, status, city, state } = this.state;
    const updatedLead = { id, name, phone, email, status, city, state };

    this.props.updateLead(updatedLead);
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

  handleChangeStatus = e => {
    this.setState({ status: e.target.value });
  };

  handleChangeCity = e => {
    this.setState({ city: e.target.value });
  };

  handleChangeState = e => {
    this.setState({ state: e.target.value });
  };

  render() {
    const { name, phone, email, status, city, state } = this.state;
    return (
      <form
        role='row'
        className='BaseTable__row'
        onSubmit={e => this.handleSubmit(e)}
      >
        {/* <div role='gridcell' className='BaseTable__row-cell cell-sz-xs'></div> */}
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
        <select
          name='status'
          id='status'
          role='gridcell'
          className='BaseTable__row-cell cell-sz-sm'
          value={status}
          onChange={this.handleChangeStatus}
          required
        >
          <option value='New'>New</option>
          <option value='test'>test</option>
          <option value='test'>test</option>
          <option value='test'>test</option>
        </select>
        <select
          name='city'
          id='city'
          value={city}
          role='gridcell'
          className='BaseTable__row-cell cell-sz-med'
          onChange={this.handleChangeCity}
          required
        >
          <option value='' disabled>
            Select...
          </option>
          <option value='New'>Letterkenny</option>
          <option value='test'>test</option>
          <option value='test'>test</option>
          <option value='test'>test</option>
        </select>
        <select
          name='state'
          id='state'
          value={state}
          role='gridcell'
          className='BaseTable__row-cell cell-sz-med'
          onChange={this.handleChangeState}
          required
        >
          <option value='' disabled>
            Select...
          </option>
          {states.map((state, key) => (
            <option value={state.name} key={key}>
              {state.name}
            </option>
          ))}
        </select>
        <SubmitButton />
      </form>
    );
  }
}
