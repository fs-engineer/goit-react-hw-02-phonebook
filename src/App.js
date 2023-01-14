import { Component } from 'react';
import { nanoid } from 'nanoid';
import {
  Section,
  SearchForm,
  ContactsList,
  FilterByName,
  Title,
} from './components';
import { CONTACTS_DATA } from './essets/contactsData';

class App extends Component {
  state = {
    contacts: CONTACTS_DATA,
    filter: '',
  };

  addContact = e => {
    e.preventDefault();
    const newContact = {
      name: e.target.name.value,
      number: e.target.number.value,
      id: nanoid(),
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));

    this.reset();
  };

  onChangeInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  filterByName = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { filter } = this.state;
    const filteredContactsByName = this.filterByName();

    return (
      <>
        <Section title="Phonebook">
          <SearchForm addContact={this.addContact} />
          <Title title="Contacts" />
          <FilterByName onChange={this.onChangeInput} filter={filter} />
          <ContactsList filteredContactsByName={filteredContactsByName} />
        </Section>
      </>
    );
  }
}

export default App;
