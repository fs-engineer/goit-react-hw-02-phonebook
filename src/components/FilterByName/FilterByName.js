import React, { Component } from 'react';
import { Filter } from './FilterByName.styled';

export class FilterByName extends Component {
  render() {
    const { filter, onChange } = this.props;

    return (
      <Filter onChange={onChange} type="text" name="filter" value={filter} />
    );
  }
}

export default FilterByName;
