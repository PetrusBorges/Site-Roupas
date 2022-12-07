import { Link } from 'react-router-dom';
import { Container } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import coverLogin from '../../assets/images/coverLogin.png';

export default function LogIn() {
  return (
    <Container>
      <div className="info">
        <h2>Entrar</h2>
        <Input placeholder="Email" />
        <Input placeholder="Senha" />
        <Button>Entrar</Button>
        <Link to="/register">
          <small>Ainda não tem conta ? Registre-se</small>
        </Link>

      </div>
      <hr />

      <div className="cover"><img src={coverLogin} alt="" /></div>
    </Container>
  );
}
