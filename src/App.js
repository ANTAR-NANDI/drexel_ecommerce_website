import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import SignupLogin from './Pages/SignupLogin';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      
        <Routes>
           <Route path = '/' element = {<Shop/>}/>
           <Route path = '/mens' element = {<Product/>}/>
           <Route path = '/womens' element = {<Product/>}/>
           <Route path = '/kids' element = {<Product/>}/>
           <Route path = '/product' element = {<Product/>}>
               <Route path = ':productID' element = {<ShopCategory/>}/>
            </Route>
           <Route path = '/cart' element = {<Cart/>}/>
           <Route path = '/login' element = {<SignupLogin/>}/>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
