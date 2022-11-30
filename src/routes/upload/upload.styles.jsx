import styled from 'styled-components';
import { Button, Form } from 'react-bootstrap';

export const Container = styled.div`
  width: 1100px;
  margin: 15px auto;

  display: grid;
  align-items: flex-start;
  grid-template-columns: 450px 1fr;
  grid-gap: 50px;
`;

export const PreviewContainer = styled.div`
  width: 450px;
`;

export const UploadControls = styled.div`
  padding: 10px 15px;
  background-color: var(--color-white);
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(var(--color-black-rgb), 0.3);
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Heading = styled.h1`
  font-size: 24px;
  font-weight: 700;
`;

export const CustomizedButton = styled(Button)``;

export const CustomizedForm = styled(Form)`
  width: 100%;
`;

export const FileInput = styled.input`
  display: none;
`;

export const FileLabel = styled.label`
  padding: 7px 12px;
  background-color: var(--color-secondary);
  border-radius: 5px;
  font-size: 14px;
  color: var(--color-white);
  cursor: pointer;
  margin-top: 10px;
  line-height: 1;
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-secondary-dark);
  }
`;
