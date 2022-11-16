import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form } from 'react-bootstrap';

import { signupStart } from '../../store/user/user.action';

import {
  Heading,
  SignUpContainer,
  LoginLink,
  LoginLinkParagraph,
} from './signup.styles';

const defaultFormFields = {
  userName: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

const SignUp = () => {
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { userName, email, password, passwordConfirm } = formFields;

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    dispatch(signupStart(formFields));
  };

  return (
    <SignUpContainer>
      <Heading>Sign Up</Heading>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Control
            type="text"
            placeholder="User Name"
            name="userName"
            value={userName}
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Control
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="passwordConfirm">
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            name="passwordConfirm"
            value={passwordConfirm}
            onChange={handleOnChange}
          />
        </Form.Group>

        <Button variant="success" type="submit">
          Login
        </Button>
      </Form>
      <LoginLinkParagraph>
        Already have an account!{'   '}
        <LoginLink to="/">Login</LoginLink>
      </LoginLinkParagraph>
    </SignUpContainer>
  );
};

export default SignUp;
