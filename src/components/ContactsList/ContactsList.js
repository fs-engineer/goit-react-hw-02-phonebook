import { Component } from 'react';
import { List, ListItem } from './ContactsList.styled';

export default class ContactsList extends Component {
  render() {
    const { filteredContactsByName } = this.props;

    return (
      <List>
        {Array.isArray(filteredContactsByName) &&
          filteredContactsByName.length > 0 &&
          filteredContactsByName.map(({ name, number, id }) => (
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
