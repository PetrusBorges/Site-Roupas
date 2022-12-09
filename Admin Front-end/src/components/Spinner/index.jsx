//PropTypes
import PropTypes from 'prop-types';

//Styled-Components
import { StyledSpinner } from './styles';

export default function Spinner({ size = 32}) {
  return <StyledSpinner size={size} />;
}

Spinner.propTypes = {
  size: PropTypes.number.isRequired,
};
