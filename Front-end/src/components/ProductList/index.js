import { Link } from 'react-router-dom';
import { Container } from './styles';
import card from '../../assets/images/card.png';

export default function Products() {
  return (
    <Container>
      <Link
        to="/product/:1"
      >
        <div className="productImage">
          <img src={card} alt="" />
        </div>
        <div className="productInfo">
          <hr />
          <h1>Camisa Skinny</h1>
          <strong>R$ 99,00</strong>
          <p>Ou até 12X de R$ 9,90</p>
        </div>
      </Link>

    </Container>
  );
}
