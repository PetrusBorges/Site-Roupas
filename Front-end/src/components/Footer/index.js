import { Link } from 'react-router-dom';
import { Container } from './styles';
import logoBranco from '../../assets/images/svg/logo-branco.svg';
import instagram from '../../assets/images/svg/instagram.png';
import facebook from '../../assets/images/svg/facebook.png';
import whatsapp from '../../assets/images/svg/whatsapp.png';
import opensea from '../../assets/images/svg/opensea.png';

export default function Footer() {
  return (
    <Container>
      <div className="containerContact">
        <div className="contactLogo">
          <p>Entre em contato conosco</p>
          <img src={logoBranco} alt="" />
        </div>
        <div className="contact">
          <p>Telefone: (11) 99999-9999</p>
          <p>Email:</p>
        </div>
      </div>
      <hr />
      <div className="socialContainer">
        <p>Nossas redes sociais</p>
        <div className="social">
          <a target="_blank " href="https://www.instagram.com/skinny.oficialtattoo/">
            <img src={instagram} alt="" />
          </a>
          <a target="_blank " href="https://www.facebook.com/fabricio.skinny">
            <img src={facebook} alt="https://www.facebook.com/fabricio.skinny" />
          </a>
          <a target="_blank " href="https://wa.me/5588988028888">
            <img src={whatsapp} alt="" />
          </a>

          <a href="https://opensea.io/fabricio_skinny">
            <img src={opensea} alt="" />
          </a>

        </div>

      </div>
      <hr />
      <div className="navigateContainer">
        <p>Navegue</p>
        <div className="navigate">
          <Link to="/">Home</Link>
          <Link to="/shirts">Camisas</Link>
          <Link to="/painting">Quadros</Link>
          <Link to="/custom">Personalização</Link>
        </div>
      </div>
    </Container>
  );
}
