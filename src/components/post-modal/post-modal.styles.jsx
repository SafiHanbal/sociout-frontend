import styled from 'styled-components';
import { Modal, Form, Button } from 'react-bootstrap';

export const CustomizedModal = styled(Modal)`
  background-color: rgba(var(--color-black-rgb), 0.7);
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  border-radius: 5px;
  overflow: hidden;

  width: 70vw;
  height: 35vw;
  max-height: 99vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const SliderContainer = styled.div`
  width: 50%;
  position: relative;
`;

export const ReactionContianer = styled.div`
  width: 50%;
  background-color: var(--color-gray-light-1);

  display: grid;
  grid-template-rows: max-content 1fr max-content;
`;

export const CaptionContainer = styled.div`
  background-color: var(--color-white);
  padding: 7px 10px;
`;

export const Caption = styled.p`
  font-size: 14px;
  width: 50ch;
  line-height: 1.3;
  margin-bottom: 3px;
  color: var(--color-black);
`;

export const ReactionCounter = styled.p`
  font-size: 12px;
  line-height: 1;
  color: var(--color-gray-dark-3);
`;

export const CommentContainer = styled.div``;

export const CustomizedForm = styled(Form)`
  padding: 10px;

  display: grid;
  grid-template-columns: 1fr max-content;
  grid-gap: 10px;

  & input {
    border: 1px solid var(--color-gray-dark-3);

    &:focus {
      border: 1px solid var(--color-gray-dark-3);
    }
  }
`;

export const CustomizedButton = styled(Button)`
  font-size: 12px;
`;
