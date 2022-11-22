import { useState } from 'react';
import { useSelector } from 'react-redux';

import {
  Container,
  Avatar,
  CustomizedForm,
  Heading,
  CustomizedButton,
  AvatarContainer,
  FileInput,
  FileLabel,
  EditIcon,
} from './settings.styles';

import { selectUser } from '../../store/user/user.selector';

const Settings = () => {
  const user = useSelector(selectUser);

  const defaultFormFields = {
    userName: user?.userName,
    bio: user?.bio,
  };

  const [avatarSrc, setAvatarSrc] = useState(user?.image);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { userName, bio } = formFields;

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleChangeUrl = (event) => {
    const src = URL.createObjectURL(event.target.files[0]);
    setAvatarSrc(src);
  };

  return (
    <Container>
      <Heading>Settings</Heading>
      <CustomizedForm>
        <CustomizedForm.Group className="mb-2" controlId="username">
          <CustomizedForm.Label>Username</CustomizedForm.Label>
          <CustomizedForm.Control
            type="text"
            name="username"
            value={userName}
            onChange={handleOnChange}
            spellCheck="false"
          />
        </CustomizedForm.Group>
        <CustomizedForm.Group className="mb-3" controlId="bio">
          <CustomizedForm.Label>Bio</CustomizedForm.Label>
          <CustomizedForm.Control
            as="textarea"
            rows="3"
            name="bio"
            value={bio}
            onChange={handleOnChange}
            spellCheck="false"
          />
        </CustomizedForm.Group>
        <AvatarContainer>
          <Avatar src={avatarSrc} alt="user image" />
          <FileLabel htmlFor="file">
            <EditIcon />
          </FileLabel>
          <FileInput
            type="file"
            accept="image/*"
            id="file"
            onChange={handleChangeUrl}
          />
        </AvatarContainer>
        <CustomizedButton variant="success">Update</CustomizedButton>
      </CustomizedForm>
    </Container>
  );
};

export default Settings;
