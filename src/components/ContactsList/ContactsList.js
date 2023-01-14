import { Component } from 'react';
import Button from '../Buttons/Button';
import { List, ListItem, ItemText } from './ContactsList.styled';

export default class ContactsList extends Component {
  render() {
    const { filteredContactsByName, deleteContact } = this.props;

    return (
      <List>
        {Array.isArray(filteredContactsByName) &&
          filteredContactsByName.length > 0 &&
          filteredContactsByName.map(({ name, number, id }) => (
            <ListItem key={id}>
              <ItemText>
                {name}: <span>{number}</span>
              </ItemText>
              <Button
                text="Delete"
                onClick={e => deleteContact(e.target.dataset.id)}
                id={id}
              />
            </ListItem>
          ))}
      </List>
    );
  }
}
