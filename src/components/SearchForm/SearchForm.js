import React, { Component } from 'react';
import { Form, NameInput, PhoneInput, SubmitButton } from './SearchForm.styled';

export default class SearchForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onChangeInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, number } = this.state;
    const { addContact } = this.props;

    return (
      <Form onSubmit={addContact}>
        <NameInput
          type="text"
          name="name"
          value={name}
          onChange={this.onChangeInput}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <PhoneInput
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={this.onChangeInput}
          required
        />
        <SubmitButton type="submit">Save contact</SubmitButton>
      </Form>
    );
  }
}
