import styled, { css } from 'styled-components';

export default styled.input`
	width: 428px;
	height: 50px;
	border: 2px solid ${({ theme }) => theme.colors.gray[100]};
	background: #fff;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
	border-radius: 4px;
	outline: none;
	padding: 16px;
	font-size: 16px;
	transition: border-color 0.2s ease-in;
  color: ${({ theme }) => theme.colors.gray[600]};
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[200]};
  }


	&:focus {
		border-color: ${({ theme }) => theme.colors.gray[500]};
	}

	/* ${({ theme, error }) => error && css`
		color: ${theme.colors.danger.main};
		border-color: ${theme.colors.danger.main}!important;
	`} */
`;
