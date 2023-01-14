import { Component } from 'react';
import { nanoid } from 'nanoid';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    const { contacts } = this.state;
    const name = e.target.name.value;
    const isExists = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (isExists) {
      toast.error(`Contact ${name} is already exists`);
      return;
    }

    const number = e.target.number.value;

    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));

    toast.info(`Contact ${name} added`);
  };

  deleteContact = id => {
    const { contacts } = this.state;
    const updatedContacts = contacts.filter(contact => contact.id !== id);

    this.setState(prevState => ({ contacts: updatedContacts }));
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

  render() {
    const { filter } = this.state;
    const filteredContactsByName = this.filterByName();

    return (
      <>
        <Section title="Phonebook">
          <SearchForm addContact={this.addContact} />
          <Title title="Contacts" />
          <FilterByName onChange={this.onChangeInput} filter={filter} />
          <ContactsList
            filteredContactsByName={filteredContactsByName}
            deleteContact={this.deleteContact}
          />
        </Section>
        <ToastContainer position="top-right" />
      </>
    );
  }
}

export default App;
