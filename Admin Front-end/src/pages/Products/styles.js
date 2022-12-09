import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 50px;
  width: 400px;

  small {
    display: block;
    margin-top: 15px;
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

export const ButtonContainer = styled.div`
  margin-top: 24px;

  button {
    width: 100%;
  }
`;

export const CategoriesList = styled.div`
  border-top: 2px solid ${({ theme }) => theme.styled[100]};
  border-bottom: 2px solid ${({ theme }) => theme.styled[100]};
  padding: 10px 0;
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;

export const ProductsList = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;

export const Product = styled.div`
    width: 250px;
    background-color: #FFFFFF;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

    small {
      font-size: 16px;
      word-break: break-word;
      text-align: center;

      & + small {
        margin-top: 10px;
      }
    }

    .button-13 {
      margin-top: 10px;
      background-color: #fff;
      border: 1px solid #d5d9d9;
      border-radius: 8px;
      box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;
      box-sizing: border-box;
      color: #0f1111;
      cursor: pointer;
      display: inline-block;
      font-family: "Amazon Ember",sans-serif;
      font-size: 13px;
      line-height: 29px;
      padding: 0 10px 0 11px;
      position: relative;
      text-align: center;
      text-decoration: none;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      vertical-align: middle;

    &:hover {
      background-color: #f7fafa;
    }

    &:focus {
      border-color: #008296;
      box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;
      outline: 0;
    }
  }

    img {
      width: 200px;
      height: 200px;
      border-radius: 10px;
      margin: 10px 0;
    }

    .info {
      margin: 10px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
    }
`;
