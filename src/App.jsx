import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Categories from './pages/Categories';
import Products from './pages/Products';
import About from './pages/About';
import Support from './pages/Support';
import Cart from './pages/Cart';
import Account from './pages/Account';
import Login from "./pages/login";
import Signup from "./pages/signup";
import { GlobalStateProvider } from "./GlobalStates";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";




export default function App() {

    return(
        <GlobalStateProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/products" element={<Products />} />
                <Route path="/about" element={<About />} />
                <Route path="/support" element={<Support />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/account" element={<Account />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </GlobalStateProvider>
    );
}