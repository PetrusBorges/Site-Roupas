import styled from 'styled-components';

export const Content = styled.div`
  height: 74px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .routes {
    display: flex;
    gap: 10px;

    a {
      text-decoration: none;
      padding-bottom: 5px;
      border-bottom: 1px solid transparent;
      transition: border 1s ease;

      &:hover {
        border-bottom: 1px solid ${({ theme }) => theme.styled[900]};
      }
    }
  }
`;
