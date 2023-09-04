import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from "./views/Home"
import Layout from './views/Layout';
import Shop from './views/Shop';
import Cart from './views/Cart';
import Signup from './views/Signup';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}>
          <Route path="/home" element={<Layout/>}></Route>
          <Route path="/home/shop" element={<Shop/>}></Route>
          <Route path='/home/cart' element={<Cart/>}></Route>
        </Route>
      <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
