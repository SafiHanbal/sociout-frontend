import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'react-feather';

export const Container = styled.div`
  background-color: var(--color-white);
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(var(--color-black-rgb), 0.3);
  padding: 15px 20px 10px;
  align-self: flex-start;
`;

export const Avatar = styled.img`
  display: block;
  height: 120px;
  width: 120px;
  border-radius: 50%;
  margin: 0 auto 10px;
  box-shadow: 0 4px 8px rgba(var(--color-black-rgb), 0.3);
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3px;
`;

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 5px;
`;

export const StatsHeading = styled.h3`
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0;
  color: var(--color-gray-dark-1);
`;

export const StatsText = styled.p`
  text-align: center;
  color: var(--color-gray-dark-2);
`;

export const Bio = styled.p`
  font-size: 14px;
  text-align: center;
  color: var(--color-gray-dark-2);
  margin-bottom: 5px;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 5px;
`;

export const InfoIcon = styled.img`
  height: 20px;
  width: 20px;
`;

export const InfoText = styled.p`
  font-size: 14px;
  margin-left: 10px;
  color: var(--color-gray-dark-2);
`;

export const CTAContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const CustomizedLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: var(--color-secondary);
  text-align: center;
  margin-top: 15px;
`;

export const Arrow = styled(ArrowRight)`
  height: 18px;
  margin-left: 5px;
`;
