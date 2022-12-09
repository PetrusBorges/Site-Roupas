import styled from 'styled-components';

export const Overlay = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
  background: rgba(0, 0, 0, 0.6);
`;

export const Container = styled.div`
  width: 100%;
  padding: 24px;
  max-width: 450px;
  border-radius: 4px;
  box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.04);
  background: ${({ theme }) => theme.styled[50]};
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
`;

export const Info = styled.div`
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 10px;

  .cancel-button {
    border: none;
    font-size: 16px;
    margin-right: 24px;
    background: transparent;
    color: ${({ theme }) => theme.styled[500]};

    &[disabled] {
      cursor: not-allowed;
    }
  }

  .delete-button {
    border: none;
    font-size: 16px;
    margin-right: 24px;
    padding: 10px;
    background: ${({ theme }) => theme.styled[900]};
    color: ${({ theme }) => theme.styled[50]};
  }
`;
