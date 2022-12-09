import { Container, ContainerNew, ContainerDescription } from './styles';
import card from '../../assets/images/card.png';
import Button from '../Button';
import Input from '../Input';
import ProductList from '../ProductList';
import cart from '../../assets/images/svg/carrinhoW.png';
import creditCard from '../../assets/images/svg/creditCardW.png';
import medida from '../../assets/images/svg/medidaCamisa.svg';
import medida2 from '../../assets/images/svg/medidaCamisa2.png';

import instrucoes from '../../assets/images/svg/instrucoes.png';

export default function ProductShow() {
  return (
    <>
      <Container>
        <div className="productFoto">
          <img className="main" src={card} alt="Foto do produto" />
          <div className="mini">
            <img src={card} alt="Foto do produto" />
            <img src={card} alt="Foto do produto" />
            <img src={card} alt="Foto do produto" />

          </div>
        </div>

        <div className="productInfo">
          <h1>Camisa Algodão</h1>

          <h3>R$ 100,00</h3>
          <p>ou 5x sem juros de R$ 10,00</p>
          <div className="size">
            <p>Escolha o tamanho</p>
            <Button>P</Button>
            <Button>M</Button>
            <Button>G</Button>
            <Button>GG</Button>
          </div>
          <hr />
          <small>
            Quantidade:

            <Input maxLength={2} value="1" />

          </small>
          <div className="buttons">
            <Button>
              <img src={creditCard} alt="" />
              Comprar agora

            </Button>
            <Button>
              <img src={cart} alt="" />
              Adicionar ao carrinho
            </Button>
          </div>
          <hr />
          <div className="freteContainer">
            <strong>Consultar prazo e valor do frete:</strong>
            <div className="frete">
              <Input type="number" placeholder="Digite o seu CEP" />
              <Button>Buscar</Button>
            </div>
          </div>
        </div>
      </Container>

      <ContainerNew>
        <h1>Você também pode gostar de ...</h1>
        <div className="products">
          <ProductList />
          <ProductList />
        </div>
      </ContainerNew>

      <ContainerDescription>
        <h1>Descrição</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic mollitia quam culpa modi, eius totam sint rem ea libero a fugit vitae quos provident impedit quis odit repudiandae voluptate tenetur!</p>

        <h1>Especificações</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, labore? Cupiditate recusandae repellendus dolore asperiores sequi optio deserunt iusto ipsum quam. Voluptatem repellat natus incidunt molestiae, dolores sint ipsum laborum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium quidem accusantium deserunt eligendi doloremque fuga, rerum dicta natus totam, voluptate quam facere delectus quo repellat sint maxime fugit enim alias.</p>

        <div className="medidas">
          <div>
            <h1>Medidas</h1>
            <img src={medida} alt="" />
          </div>
          <div>
            <img src={medida2} alt="" />
          </div>
          <div>
            <h1>Observações</h1>
            <p>
              As medidas podem variar até 2 cm.

              <br />
              <br />

              Este produto pode encolher em até 5% após a primeira lavagem.

            </p>
          </div>
        </div>
        <div>
          <img src={instrucoes} alt="" />
        </div>
      </ContainerDescription>

      <ContainerNew>
        <h1>Produtos relacionados</h1>
        <div className="products">
          <ProductList />
          <ProductList />
        </div>
      </ContainerNew>
    </>
  );
}
