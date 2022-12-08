import styled from 'styled-components';


export const Container = styled.div`
  max-width: 90%;
  max-height: 475px;
  margin-top: 80px;
  margin: 80px  auto 0;
  overflow: hidden;

  .inner {
    display: flex;
    cursor: grab;
  }
  .item {
    max-width: 100%;
    height: 100%;
    img {
      border-radius: 4px;
    }
    .carrousel {
      overflow: hidden;
    }
  }

`;