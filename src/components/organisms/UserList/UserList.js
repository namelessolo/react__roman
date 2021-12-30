import React, { useState, useEffect } from 'react';
import { users as usersData } from 'data/users';
import UserListItem from 'components/molecules/UserListItem/UserListItem';
import { Wrapper, StyledList } from './UserList.styles';

const mockAPI = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data) {
        resolve([...data]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    mockAPI(usersData).then((data) => {
      setUsers(data);
      setIsLoading(false);
    });
  }, []);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  return (
    <Wrapper>
      <h1>{isLoading ? 'Loading...' : 'Users List'}</h1>
      <StyledList>
        {users.map((userData) => (
          <UserListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default UserList;
