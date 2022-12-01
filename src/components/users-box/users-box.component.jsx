import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from 'react-bootstrap';
import { Search } from 'react-feather';

import UserCard from '../user-card/user-card.component';
import {
  CustomizedForm,
  CustomizedLink,
  NoUserMessage,
  UsersBoxContainer,
  UsersList,
} from './users-box.styles';

import { searchUsersStart } from '../../store/other-users/other-users.action';
import { selectSearchedUsers } from '../../store/other-users/other-users.selector';

const UsersBox = () => {
  const dispatch = useDispatch();
  const searchedUsers = useSelector(selectSearchedUsers);

  const [searchStr, setSearchStr] = useState('');

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (!searchStr) return;
    dispatch(searchUsersStart(searchStr));
  };

  const handleOnChange = (event) => {
    setSearchStr(event.target.value);
  };

  return (
    <UsersBoxContainer>
      <CustomizedForm onSubmit={handleOnSubmit}>
        <CustomizedForm.Group className="mb-3" controlId="search-users">
          <CustomizedForm.Control
            type="text"
            placeholder="Search Users"
            value={searchStr}
            onChange={handleOnChange}
          />
        </CustomizedForm.Group>
        <Button type="submit" variant="success">
          <Search height={20} />
        </Button>
      </CustomizedForm>
      <UsersList>
        {searchedUsers.length ? (
          searchedUsers.map((user) => (
            <CustomizedLink key={user?._id} to={`/user/${user?._id}`}>
              <UserCard user={user} />
            </CustomizedLink>
          ))
        ) : (
          <NoUserMessage>No Searched User</NoUserMessage>
        )}
      </UsersList>
    </UsersBoxContainer>
  );
};

export default UsersBox;
