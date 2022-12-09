//Routes
import { Routes, Route } from 'react-router-dom';

//Pages
import Products from './pages/Products';
import CreateProducts from './pages/CreateProducts';

export default function ReactRoutes() {
  return (
    <Routes>
      <Route path='/' element={<CreateProducts />} />
      <Route path='/products' element={<Products />} />
    </Routes>
  );
}
