import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Shirts from './pages/Shirts';
import Painting from './pages/Painting';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import Cart from './pages/Cart';

export default function ReactRoutes() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/shirts" element={<Shirts />} />
      <Route path="/painting" element={<Painting />} />
      <Route path="/login/" element={<LogIn />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />

    </Routes>
  );
}
