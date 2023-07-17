import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css'
export class ContactForm extends Component {
  state = {
    name: '',
    number: ''
 }

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit = e => {
    e.preventDefault();
    const contact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };
    this.props.onAddContact(contact);
    this.reset()
  }

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
  const { name, number } = this.state;
    return (
      <>
        <form className={css.form} onSubmit={this.onSubmit} >
          <label className={css.label}>
            <span>Name</span>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash, and spaces. For example: Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={this.onInputChange}
            />
          </label>
          <label className={css.label}>
            <span>Number</span>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={this.onInputChange}
            />
          </label>

          <button className={css.button} type="submit">
            Add contact
          </button>
        </form>
      </>
    )
 }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};