import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 90%;
  margin: 0 auto 0;
  
`;

export const ContainerPromo = styled.div`
  display: flex;
  height: 500px;
  margin: 50px auto 50px;
  .promoBaner {
    width: 600px;
    height: 500px;
    border-radius: 16px;
    
  }
`;

export const ContainerPromoStripe = styled.div`
  width: 100%;
  height: 200px;
  margin: 50px auto 50px;
  .promoBaner {
    height: 200px;
    width: 100%;
  }

`;
