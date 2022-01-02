import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { Wrapper, StyledAverage, StyledInfo } from './UserListItem.styles';
import { UserShape } from 'types';
import { UsersContext } from 'providers/UsersProvider';

const UserListItem = ({ userData: { average, name, attendance = '0%' } }) => {
  const { deleteUser } = useContext(UsersContext);
  return (
    <Wrapper>
      <StyledAverage value={average}>{average}</StyledAverage>
      <StyledInfo>
        <p>{name}</p>
        <p>attendance: {attendance}</p>
      </StyledInfo>
      <DeleteButton onClick={() => deleteUser(name)} />
    </Wrapper>
  );
};

UserListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

export default UserListItem;
