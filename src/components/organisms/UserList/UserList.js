import React from 'react';
import PropTypes from 'prop-types';
import { StyledList } from './UserList.styles';
import { UserShape } from 'types';
import { Title } from 'components/atoms/Title/Title';
import UserListItem from 'components/molecules/UserListItem/UserListItem';

const UserList = ({ users }) => {
  return (
    <>
      <Title>Students list</Title>
      <StyledList>
        {users.map((userData) => (
          <UserListItem key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
};

export default UserList;
