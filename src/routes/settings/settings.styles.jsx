import styled from 'styled-components';
import { Button, Form } from 'react-bootstrap';
import { Edit2 } from 'react-feather';

export const Container = styled.div`
  width: 800px;
  margin: 25px auto 15px;
  padding: 20px 25px;

  background-color: var(--color-white);
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(var(--color-black-rgb), 0.3);
`;

export const Heading = styled.h1`
  font-size: 36px;
  line-height: 1;
  margin-bottom: 15px;
`;

export const CustomizedForm = styled(Form)`
  width: 500px;
`;

export const AvatarContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const Avatar = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  margin-bottom: 15px;
`;

export const FileInput = styled.input`
  display: none;
`;

export const FileLabel = styled.label`
  border: 2px solid var(--color-white);
  background-color: var(--color-secondary-light);
  border-radius: 50%;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  position: absolute;
  top: 4%;
  right: 4%;
`;

export const EditIcon = styled(Edit2)`
  stroke: var(--color-white);
  stroke-width: 2px;
  height: 18px;
  width: 18px;
`;

export const CustomizedButton = styled(Button)`
  display: block;
`;
