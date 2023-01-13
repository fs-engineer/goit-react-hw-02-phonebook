import styled from '@emotion/styled';

export const FilterByName = styled(Filter)`
  padding: 5px;
  margin-right: 15px;
  border-radius: 5px;
  border: 1px solid blue;
`;

function Filter(props) {
  const { filter, onChangeFilter } = props;

  return (
    <input onChange={onChangeFilter} type="text" name="filter" value={filter} />
  );
}
