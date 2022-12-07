import { Link } from 'react-router-dom';
import { Container } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import coverLogin from '../../assets/images/coverLogin.png';

export default function Register() {
  return (
    <Container>
      <div className="info">
        <h2>Registre-se</h2>
        <Input placeholder="Nome" />
        <Input placeholder="Email" />
        <Input placeholder="Senha" />
        <Input placeholder="Confirme a senha" />
        <Button>Registrar</Button>

        <Link to="/login">
          <small>Já tem uma conta? Entrar</small>
        </Link>

      </div>
      <hr />

      <div className="cover"><img src={coverLogin} alt="" /></div>
    </Container>
  );
}
