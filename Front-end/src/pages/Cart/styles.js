import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: space-around;

  .infoContainer {
    width: 640px;


    .info {
    width: 450px;
    padding: 42px, 20px, 42px, 60px;
    margin: 0 auto;
    input {
      margin-bottom: 32px;
      height: 40px;
    }

    h3 {
      margin-bottom: 24px ;
      font-size: 20px;
    }
    small {
      margin-bottom: 4px;
      font-size: 16px;
      font-weight: 100;
    }

    select {
      margin-bottom: 26px;
    }

    textarea {
      width: 428px;
      height: 100px;
      border: 2px solid ${({ theme }) => theme.colors.gray[100]};
      border-radius: 4px;
      resize: none;
      padding: 16px;
      outline: none;
      transition: border-color 0.2s ease-in;

      &:focus {
        border-color: ${({ theme }) => theme.colors.gray[500]};
      }
    }

    button {
        width: 428px;
        margin-top: 32px;
        font-size: 20px;
      }





    h3, Small, textarea {
      display: block;

    }
  }
  }



  .items {
    width: 710px;
    .total {
      margin-left: 250px
    }
  }


`;
