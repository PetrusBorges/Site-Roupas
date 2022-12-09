import styled from 'styled-components';

export const Container = styled.div`
  width:100% ;
  height: 200px;
  margin-top: 250px;
  background: ${({ theme }) => theme.colors.gray[900]};
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 32px;
  p {
    font-size: 18px;
  }

  .containerContact {
    width: 530px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .contactLogo {

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 50px;
        margin-top: 16px;
      }
    }
    .contact {
      margin-left: 32px;
      p {
        margin-bottom: 16px;
      }
    }
  }
  .socialContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
      margin-bottom: 16px;
    }
    .social {
      display: flex;
      gap: 26px;
        img {
          &:hover {
            opacity: 0.5;
            transition: all 0.2s ease-in-out;
          };

      }
    }

  }
  .navigateContainer {
    .navigate {
      margin-top: 16px;
      display: flex;
      flex-direction: column;
      text-align: end;
      a {
        text-decoration: none;
        color: #fff;
        &+a {
          margin-top: 8px;
        }
        &:hover {
          color: ${({ theme }) => theme.colors.gray[600]};
        }
      }
    }
  }

`;
