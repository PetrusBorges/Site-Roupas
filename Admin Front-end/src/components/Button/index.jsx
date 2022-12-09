//PropTypes
import PropTypes from 'prop-types';

//Styled-Components
import { StyledButton } from './styles';

//Components
import Spinner from '../Spinner';

export default function Button({
  type = 'button',
  disabled = false,
  isLoading = false,
  children,
  onClick = undefined,
}) {
  return (
    <StyledButton
      type={type}
      disabled={isLoading || disabled}
      onClick={onClick}
    >
      {!isLoading && children}
      {isLoading && <Spinner size={16}/>}
    </StyledButton>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
