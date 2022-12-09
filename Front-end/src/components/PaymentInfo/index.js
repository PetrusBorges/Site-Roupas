import { Container } from './styles';
import creditCard from '../../assets/images/svg/creditCard.png';
import delivery from '../../assets/images/svg/delivery.png';
import box from '../../assets/images/svg/box.png';
import pix from '../../assets/images/svg/pix.png';
import logo from '../../assets/images/svg/logopequeno.png';

export default function PaymentInfo() {
  return (
    <Container>
      <img src={creditCard} alt="" />
      <span>Em até 10x sem juros</span>
      <img src={delivery} alt="" />
      <span>Entrega Rápida</span>
      <img src={box} alt="" />
      <span>Frete para todo o Brasil</span>
      <img src={pix} alt="" />
      <span>Selecione o pix e ganhe 5% de desconto</span>
      <img src={logo} alt="" />
      <span>Produtos exclusivos</span>
    </Container>
  );
}
