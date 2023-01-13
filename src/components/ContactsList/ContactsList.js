import { Component } from 'react';
import { List, ListItem } from './ContactList.styled';

export class ContactsList extends Component {
  render() {
    const { filteredByName } = this.props;

    return (
      <List>
        {Array.isArray(filteredByName) &&
          filteredByName.length > 0 &&
          filteredByName.map(({ name, number, id }) => (
            <ListItem key={id}>
              <p>
                {name}: <span>{number}</span>
              </p>
            </ListItem>
          ))}
      </List>
    );
  }
}
