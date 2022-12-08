import PropTypes from 'prop-types';

import card from '../../assets/images/card.png';
import { Container } from './styles';
import Button from '../Button';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

export default function CardList({
  title, description, size, color, quantity, price,
}) {
  const { removeFromCart } = useContext(CartContext);
  return (
    <Container>
      <div className="cardFoto">
        <img src={card} alt="" />
      </div>
      <div className="info">
        <div className="title">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        <div className="description">
          <p>
            Tamanho:&nbsp;
            <strong>
              {size}
            </strong>
          </p>
          <p>
            Cor: &nbsp;
            <strong>
              {color}
            </strong>
          </p>
          <p>
            Quantidade:
            &nbsp;
            <strong>
              <Button onClick={() => removeFromCart } className="add">
                <p>-</p>
              </Button>

              &nbsp;
              {quantity}
              &nbsp;

              <Button className="add">
                <p>+</p>
              </Button>
            </strong>
          </p>
          <p>
            Preço: &nbsp;&nbsp;
            <strong>
              $
              {price}
            </strong>
          </p>
        </div>
        <Button>Remover</Button>

      </div>

    </Container>
  );
}

CardList.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};
