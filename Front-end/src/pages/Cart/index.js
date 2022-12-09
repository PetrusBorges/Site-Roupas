// import { useState } from 'react';
import { Container } from './styles';

import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';
import Products from '../../components/ProductList';

export default function Cart() {
  return (
    <Container>
      <div className="infoContainer">
        <div className="info">
          <h3>Cidade</h3>
          <Input />

          <h3>Endereço</h3>
          <Input />

          <h3>Detalhes do comprador</h3>

          <small>Nome e Sobrenome</small>
          <Input />
          <small>Email</small>
          <Input />

          <small>Telefone</small>
          <Input />

          <h3>Método de pagamento</h3>
          <Select>
            <option defaultValue="Selecione" value="">Selecione</option>
            <option value="">Cartão de crédito</option>
            <option value="">Pix</option>
            <option value="">Boleto bancário</option>
          </Select>

          <h3>Comentários sobre o pedido</h3>
          <textarea name="comments" id="comments" cols="30" rows="10" />

          <Button>Finalizar compra</Button>

        </div>
      </div>

      <hr />

      <div className="itemsContainer">
        <div className="items">
          <Products />
        </div>
      </div>
    </Container>
  );
}
