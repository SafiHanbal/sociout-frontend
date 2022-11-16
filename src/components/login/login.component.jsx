import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form } from 'react-bootstrap';

import { loginStart } from '../../store/user/user.action';

import {
  Heading,
  LoginContainer,
  SignUpLink,
  SignUpLinkParagraph,
} from './login.styles';

const defaultFormFields = {
  email: '',
  password: '',
};

const Login = () => {
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    dispatch(loginStart(formFields));
  };

  return (
    <LoginContainer>
      <Heading>Login</Heading>
      <Form onSubmit={handleOnSubmit}>
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

        <Button variant="success" type="submit">
          Login
        </Button>
      </Form>
      <SignUpLinkParagraph>
        Don't have an account!{'   '}
        <SignUpLink to="signup">SignUp</SignUpLink>
      </SignUpLinkParagraph>
    </LoginContainer>
  );
};

export default Login;
