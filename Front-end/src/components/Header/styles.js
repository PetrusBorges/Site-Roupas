import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 94px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 28px 60px;

  border-bottom: 1px solid black;




  .navbar, .checkout {
    display: flex;
    flex-direction: row;
    gap: 36px;
    text-transform: uppercase;


    a{
    text-decoration: none;
    font-size: 15px;
    color: ${({ theme }) => theme.colors.gray[900]};
    &:hover {
        opacity: 0.5;
        transition: opacity 0.2s ease-in-out;
        text-decoration: underline;
        text-underline-offset: 6px;


      }
    img {
      width: 24px;
      height: 28px;
    }

  }
  }







`;
