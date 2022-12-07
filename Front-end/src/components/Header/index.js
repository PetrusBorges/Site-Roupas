import { Link } from 'react-router-dom';
import { Container } from './styles';

import profile from '../../assets/images/svg/profile.svg';
import cart from '../../assets/images/svg/cart.svg';
import sun from '../../assets/images/svg/sun.svg';

export default function Header() {
  return (
    <Container>
      <div className="logo">
        <h1>SKINNY</h1>
      </div>
      <div className="navbar">
        <Link to="/">Início</Link>
        <Link to="/shirts">Camisas</Link>
        <Link to="/painting">Quadros</Link>
        <Link to="/custom">Personalização</Link>
      </div>
      <div className="checkout">

        <Link to="/cart"><img src={cart} alt="" /></Link>
        <Link to="/"><img src={profile} alt="" /></Link>
        <br />
        <Link to="/"><img src={sun} alt="" /></Link>
      </div>
    </Container>
  );
}
