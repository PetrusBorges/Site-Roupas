//Styled-Components
import GlobalStyled from '../../assets/styles/global';
import DefaultStyled from '../../assets/styles/themes/default';
import { ThemeProvider } from 'styled-components';
import { Container } from './styles';

//Components
import Header from '../Header';

//Routes
import ReactRoutes from '../../Routes';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={DefaultStyled}>
        <GlobalStyled />

        <Container>
          <Header />
          <ReactRoutes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}
