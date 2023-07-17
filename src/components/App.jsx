import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';


export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',

  }

  onAddContact = data => {
    const isContact = this.state.contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    if (isContact) {
      return alert(`${data.name} is already in contact`);
    }
    this.setState(({ contacts }) => ({
      contacts: [data, ...contacts],
    }));
  }

  onRemoveContact = contactId => {
    this.setState ({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId)
    })
  }

  onFilterByName = event => {
  this.setState({ filter: event.target.value });
  }

  render() {
    const { filter, contacts } = this.state;
    const filterContact = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.onAddContact}/>

        <h2>Contacts</h2>
        <Filter onFilterChange={this.onFilterByName} filter={this.state.filter}/>
        <ContactList onRemoveContact={this.onRemoveContact} contacts={filterContact} />
      </div>
    )
  }
}