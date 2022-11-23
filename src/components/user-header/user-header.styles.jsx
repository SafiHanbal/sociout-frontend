import styled from 'styled-components';
import { PlusSquare, MoreVertical } from 'react-feather';
import { Button } from 'react-bootstrap';

export const Container = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 150px 1fr;
  grid-column-gap: 50px;
`;

export const Avatar = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(var(--color-black-rgb), 0.3);
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ActionConatiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Name = styled.h2`
  font-size: 28px;
  font-weight: 700;
  line-height: 1;
`;

export const AddIcon = styled(PlusSquare)`
  cursor: pointer;
  height: 28px;
  width: 28px;
  margin-right: 10px;
`;

export const MoreContainer = styled.div`
  position: relative;
`;

export const MoreIcon = styled(MoreVertical)`
  cursor: pointer;
  height: 28px;
  width: 28px;
`;

export const FollowButton = styled(Button)`
  width: 66px;
  height: 30px;
  line-height: 1;
  align-self: center;
  font-size: 12px;
  padding: 7px 0;
  text-align: center;
`;

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 25px 0;
`;

export const StatsHeading = styled.h3`
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  color: var(--color-gray-dark-1);
  margin-bottom: 5px;
`;

export const StatsText = styled.p`
  text-align: center;

  color: var(--color-gray-dark-1);
`;

export const Bio = styled.p`
  font-size: 16px;
  color: var(--color-gray-dark-2);
`;
