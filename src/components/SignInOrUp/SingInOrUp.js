import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SingInOrUpWrap = styled.div`
  display: flex;
  gap: 16px;

  @media screen and (max-width: 833px) {
    ${(prop) => prop.$flexDirectionColumn && 'flex-direction: column;'}
  }

  @media screen and (min-width: 833px) and (max-width: 1439px) {
    margin-left: 30px;
  }
`;

export const SingInOrUpLink = styled(Link)`
  font-weight: 500;
  color: var(--primary-title-text-color);
`;
