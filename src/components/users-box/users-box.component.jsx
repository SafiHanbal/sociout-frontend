import { Button } from 'react-bootstrap';

import { Search } from 'react-feather';

import { CustomizedForm, UsersBoxContainer } from './users-box.styles';

const UsersBox = () => {
  return (
    <UsersBoxContainer>
      <CustomizedForm>
        <CustomizedForm.Group className="mb-3" controlId="search-users">
          <CustomizedForm.Control type="text" placeholder="Search Users" />
        </CustomizedForm.Group>
        <Button type="submit" variant="success">
          <Search height={20} />
        </Button>
      </CustomizedForm>
    </UsersBoxContainer>
  );
};

export default UsersBox;
