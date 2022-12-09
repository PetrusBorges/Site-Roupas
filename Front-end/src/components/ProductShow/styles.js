import styled from 'styled-components';

export const Container = styled.div`
background: rgb(200, 200, 200, .2);
width: 100%;
  display: flex;
  margin: 0 auto;
  padding: 150px 12px 50px 50px;
  

  
  .productFoto {
    width: 800px;
    display: flex;
    border: 1px solid black;
    height: 700px;
    border-radius: 16px;
    margin-right: 50px;
    .mini {
    margin: 16px 0 0 32px;
    

    img {
      background: #fff;
      border: 1px solid rgba(0,0,0,0.2);
      border-radius: 4px;
      width: 100px;
      margin: 8px;
    }
  }


  }
  .productInfo {
    margin-top: 50px;

    text-align: start;
    h1 {
      margin-bottom: 48px;
    }
    h3 {
      font-size: 32px;
    }
    hr {
      width: 300px;
      margin: 0 8px 32px;
      color: ${({ theme }) => theme.colors.gray[100]};
      opacity: 0.6;
    }


    .size {
      margin-top: 48px;
      margin-bottom: 32px;
      button {
      width: 60px;
      margin: 10px;
      background: none;
      border: 1px solid black;
      color: #000;
    }
    }
    .buttons {
      margin-top: 50px;
      margin-bottom: 32px;

      
      img {
        width: 30px;
        margin-right: 16px;
        
      }
      button {
        display: flex;
        width: 300px;
        ;
        align-items: center;
        justify-content: center;
        margin: 10px;
      }
    }

    small {
      display: block;
      margin-left: 10px;
      input {
        width: 50px;
        height: 50px;
        border-radius: 10px;
        margin-left: 16px;
        
      }
    }

    .freteContainer {
      display: flex;
      flex-direction: column;
      gap: 10px;
      justify-content: center;
      align-items: center;

      .frete {
        display: flex;
        input {
        width: 200px;
        height: 40px;
        border-radius: 8px;
        arrows: none;
      }
      button {
        height: 40px;
        width: 80px;
        margin-left: -10px;
      }
      }
    }
  }

`;

export const ContainerNew = styled.div`
margin-top: 50px;
background: gray;
padding: 32px;
  h1 {
    padding: 8px;
    display: block;
  }

  .products {
    display: flex;
  flex-direction: row;
  }
`;

export const ContainerDescription = styled.div`
  padding: 32px;

  max-width: 1150px;
  margin: 50px auto;
    h1 {
      margin-bottom: 16px;
    }
    p {
      margin-bottom: 32px;
    }

    .medidas {
      margin-top: 80px;
      margin-bottom: 50px;
      display: flex;
      justify-content: space-between;
    }
  `;
