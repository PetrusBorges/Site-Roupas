import styled from 'styled-components';

export const Container = styled.div`
display: flex;
margin-bottom: 24px;
padding: 42px 60px 42px 49px;
  .cardFoto {
    background: ${({ theme }) => theme.colors.gray[150]};
    width: 180px;
    height: 205px;
  }

  .info {
    margin-left: 24px;
    padding: 5px;

    .title {
      text-transform: uppercase;
      height: 65px;
      font-size: 16px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0;
      gap: 8px;
      p {
        font-size: 12px;
      }
  }
    .description {
      width: 420px;
      margin-top: 40px;
      display: flex;
      flex-direction: row;
      gap: 10px;


      align-items: flex-start;
    }
    button {
      margin-top: 20px;
      background: none;
      color: ${({ theme }) => theme.colors.danger.main};
      width: 20px;
    }
    .add {
      background: none;
      width: 12px;
      height: 5px;
      gap: 25px;
      margin-top: 0;
      margin-left: 0;
      p {
        font-size: 16px;
      }
    }
}


`;
