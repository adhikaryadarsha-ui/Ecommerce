import Navbar from "./components/Navbar/Navbar";
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Footer from './components/Footer/Footer'
import banner_mens from './components/Assets/banner_mens.png';
import banner_women from './components/Assets/banner_women.png';
import banner_kids from './components/Assets/banner_kids.png';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Navbar />
      <Routes>
        <Route path="/" element={<Shop />}/>
        <Route path="/men"  element={<ShopCategory banner={banner_mens} category="men"/>}/>
        <Route path="/women"  element={<ShopCategory banner={banner_women} category="women"/>}/>
        <Route path="/kids"  element={<ShopCategory banner={banner_kids} category="kid"/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/product" element={<Product />}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
      </Routes>
      <Footer />
      </BrowserRouter>
  
    </div>
  );
}

export default App;
