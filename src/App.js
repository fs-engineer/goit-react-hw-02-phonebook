import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Section } from './components/Section/Section';
import SearchForm from './components/SearchForm/SearchForm';
import { ContactsList } from './components/ContactsList/ContactsList';
import { FilterByName } from './components/FilterByName/FilterByName';

const CONTACTS_DATA = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
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

          <FilterByName onChange={this.onChangeInput} filter={filter} />
          <ContactsList filteredContactsByName={filteredContactsByName} />
        </Section>
      </>
    );
  }
}

export default App;
