import styled from 'styled-components';

export const Container = styled.div`

  margin-top: 100px;
  display: flex;
  justify-content: space-around;
  h2 {
    margin-bottom: 40px;
  }
  input {
    margin-bottom: 16px;
  }
  .info {
    margin-top: 60px;
    width: 600px;
    height: 380px;
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
      text-decoration: none;
      margin-top: 16px;
      color: ${({ theme }) => theme.colors.gray[300]};
      small {
        font-size: 18px;
      }
    }
  }
  .cover {
    img {
      height: 510px;
    }
  }


`;
