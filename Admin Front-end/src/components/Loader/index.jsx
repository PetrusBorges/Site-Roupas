//PropTypes
import PropTypes from 'prop-types';

//Styled-Components
import { Overlay } from './styles';

//Components
import ReactPortal from '../ReactPortal';
import Spinner from '../Spinner';

export default function Loader({ isLoading = false }) {
  if (!isLoading) {
    return null;
  }

  return (
    <ReactPortal containerId='loader-root'>
      <Overlay>
        <Spinner size={90} />
      </Overlay>
    </ReactPortal>
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
