import React from 'react';
import { users } from 'data/users';
import UserListItem from 'components/molecules/UserListItem/UserListItem';
import { Wrapper } from './UserList.styles';

const UserList = () => {
  return (
    <Wrapper>
      <ul>
        {users.map((UserData) => (
          <UserListItem UserData={UserData} />
        ))}
      </ul>
    </Wrapper>
  );
};

export default UserList;
