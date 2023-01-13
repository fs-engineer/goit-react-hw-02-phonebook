import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Section } from './components/Section/Section';
import SearchForm from './components/SearchForm/SearchForm';
import { ContactsList } from './components/ContactsList/ContactsList';
import { FilterByName } from './components/FilterByName/FilterByName';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
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

  filterByName = value => {
    const { contacts } = this.state;

    return contacts.filter(contact =>
      value ? contact.name.toLowerCase() === value.toLowerCase() : contact,
    );
  };

  onChangeInput = e => {
    console.log('e', e);
    this.setState({ [e.target.name]: e.target.value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, contacts, number } = this.state;
    const filteredByName = this.filterByName();

    return (
      <>
        <Section title="Phonebook">
          <SearchForm
            name={name}
            number={number}
            addContact={this.addContact}
            onChangeInput={this.onChangeInput}
          />
        </Section>
        <Section title="Contacts">
          <FilterByName onChangeFilter={this.onChangeInput} />
          <ContactsList filteredByName={filteredByName} contacts={contacts} />
        </Section>
      </>
    );
  }
}

export default App;
