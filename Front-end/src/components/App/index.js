import { ThemeProvider } from 'styled-components';
import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import Header from '../Header';
import { Container } from './styles';
import ReactRoutes from '../../Routes';
import Footer from '../Footer';
import { CartProvider } from '../../contexts/CartContext';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyles />
          <Container>
            <Header />
            <ReactRoutes />
            <Footer />
          </Container>
        </ThemeProvider>

      </CartProvider>

    </BrowserRouter>
  );
}

export default App;
