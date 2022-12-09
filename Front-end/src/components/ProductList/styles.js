import styled from 'styled-components';

export const Container = styled.div`
    background: #fff;
    width: 200px;
    height: 350px;
    border: 1px solid black;


    border-radius: 8px;
    box-shadow: 8px 11px 28px -11px rgba(0,0,0,0.2);
    margin-right: 32px;
    margin-left: 16px;
    margin-top: 32px;
    a {
      text-decoration: none;
    }
    .productImage {
      margin-top: 24px;
      width: 100%;
      height: 150px;
      display: flex;
      justify-content: center;
      align-items: center;


    }

    .productInfo {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 8px;

      hr {
        margin-top: 45px;
      }

      h1 {
        font-size: 20px;
        margin-top: 10px;
        padding-left: 15px;
        color: ${({ theme }) => theme.colors.gray[700]};
    }
  
    strong {
      font-size: 24px;
      color: #45aa;
      margin-top: 8px;
    }

    p {
      font-size: 12px;
      margin-top: 8px;
      color: ${({ theme }) => theme.colors.gray[500]};
    }
  }
`;
