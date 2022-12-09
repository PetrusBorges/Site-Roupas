import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  display: flex;
  margin: 50px auto;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background: ${({ theme }) => theme.colors.gray[200]};
  border-radius: 4px;
  span {
    font-size: 12px;
    margin-right: 16px;
  }
  img {
    margin: 0 16px;
  }

`;
