//PropTypes
import PropTypes from 'prop-types';

//Styled-Components
import { Overlay, Container, Info, Footer } from './styles';

//Components
import Button from '../Button';
import ReactPortal from '../ReactPortal';

//Imagens
import Alert from '../../assets/images/alert.svg';

export default function Modal({
  visible,
  isLoading,
  onCancel,
  onDelete,
}) {

  if (!visible) {
    return null;
  }

  return (
    <ReactPortal containerId='modal-root'>
      <Overlay>
        <Container>
          <img src={Alert} alt="Alert" />
          <Info>
            <h2>Excluir produto</h2>
            <span>Você tem certeza que deseja excluir esse produto? Essa açaõ não poderá ser desfeita.</span>
            <Footer>
              <button
                type='button'
                onClick={onCancel}
                disabled={isLoading}
                className='cancel-button'
              >
                Cancelar
              </button>
              <Button
                type='button'
                onClick={onDelete}
                isLoading={isLoading}
                className='delete-button'
              >
                Deletar
              </Button>
            </Footer>
          </Info>
        </Container>
      </Overlay>
    </ReactPortal>
  );
}

Modal.propTypes = {
  isLoading: PropTypes.bool,
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
