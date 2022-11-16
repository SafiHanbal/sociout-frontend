import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoginContainer = styled.div`
  padding: 15px 20px;
`;

export const Heading = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;

export const SignUpLinkParagraph = styled.p`
  margin-top: 10px;
  padding-top: 15px;
  border-top: 1px solid var(--color-gray-light-3);
`;

export const SignUpLink = styled(Link)`
  text-decoration: none;
  color: var(--color-secondary-light);
`;
