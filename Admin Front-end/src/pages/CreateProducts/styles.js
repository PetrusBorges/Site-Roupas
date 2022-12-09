import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 50px;
  width: 400px;

  small {
    display: block;
    margin-top: 15px;
  }

  input[type="file"] {
    display: none;
  }

  label {
    padding: 20px 10px;
    width: 200px;
    background: ${({ theme }) => theme.styled[900]};
    color: #FFF;
    text-transform: uppercase;
    border-radius: 4px;
    text-align: center;
    display: block;
    margin-top: 10px;
    cursor: pointer;
    transition: background 0.5s ease;

      &:hover {
      background: ${({ theme }) => theme.styled[500]};
    }
  }
`;

export const Input = styled.input`
  width: 400px;
  height: 52px;
  border: none;
  outline: none;
  padding: 0 16px;
  font-size: 16px;
  appearance: none;
  border-radius: 4px;
  transition: border-color 1s ease;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  color: ${({ theme }) => theme.styled[900]};
  background: ${({ theme }) => theme.styled[50]};
  border: 2px solid ${({ theme }) => theme.styled[200]};

  &::placeholder {
    color: ${({ theme }) => theme.styled[200]};
  }
`;

export const Select = styled.select`
  width: 400px;
  height: 52px;
  border: none;
  outline: none;
  padding: 0 16px;
  font-size: 16px;
  appearance: none;
  border-radius: 4px;
  transition: border-color 1s ease;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  color: ${({ theme }) => theme.styled[900]};
  background: ${({ theme }) => theme.styled[50]};
  border: 2px solid ${({ theme }) => theme.styled[200]};

  &::placeholder {
    color: ${({ theme }) => theme.styled[200]};
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 24px;

  button {
    width: 100%;
  }
`;

export const BackGroundContainer = styled.div`
  overflow: hidden;
  position: fixed;
  z-index: -1;
  top: 0;
  right: 0;

  img {
    height: 100vh;
    transform: translateY(75px);
  }
`;

