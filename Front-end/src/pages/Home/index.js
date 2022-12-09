import { Container, ContainerPromo, ContainerPromoStripe } from './syles';
import AutoPlay from '../../components/Slider';
import Products from '../../components/ProductList';
import PromoBaner from '../../components/PromoBaner';
import PaymentInfo from '../../components/PaymentInfo';

export default function Home() {
  return (
    <>
      <AutoPlay className="slider" />

      <PaymentInfo />
      <ContainerPromo>
        <PromoBaner />
        <PromoBaner />
      </ContainerPromo>

      <Container>
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
      </Container>

      <ContainerPromoStripe className="stripe">
        <PromoBaner />
      </ContainerPromoStripe>

      <Container>
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
      </Container>

    </>

  );
}
