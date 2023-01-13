import React, { Component } from 'react';
import { Form, NameInput, PhoneInput, SubmitButton } from './SearchForm.styled';

export default class SearchForm extends Component {
  render() {
    const { addContact, name, number, onChangeInput } = this.props;

    return (
      <Form onSubmit={addContact}>
        <NameInput
          type="text"
          name="name"
          value={name}
          onChange={onChangeInput}
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
          onChange={onChangeInput}
          required
        />
        <SubmitButton type="submit">Save contact</SubmitButton>
      </Form>
    );
  }
}
