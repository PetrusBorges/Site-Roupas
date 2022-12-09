//Styled-Components
import { Content } from './styles';

//Imagens
import Logo from '../../assets/images/Logo.svg';

//Routes
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Content>
      <img src={Logo} alt="Logo" />

      <div className="routes">
        <Link to="/">Criar Produtos</Link>
        <Link to="/products">Produtos por categoria</Link>
      </div>
    </Content>
  );
}
