import styled, { css } from 'styled-components';

export default styled.button`
  background: ${({ theme }) => theme.colors.gray[900]};
  width: 200px;
  height: 50px;
  color: #fff;
  border: none;
  border-radius: 4px;
  outline: none;
  transition: all 0.2s ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.gray[500]};
    color: ${({ theme }) => theme.colors.gray[900]};
  }

  &:active{
    background: ${({ theme }) => theme.colors.gray[800]};
    color: #fff;
    transition: all 0.1s ease-in;
  }



`;
