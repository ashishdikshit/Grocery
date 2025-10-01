import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import ProductDetails from "./Pages/ProductDetails";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Cart from "./Pages/Cart";
import WishList from "./Pages/WishList";
import CheckOut from "./Pages/CheckOut";
import AddAddress from "./Pages/AddAddress";
import MyOrder from "./Pages/MyOrder";
import Navbar from "./componants/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "./componants/Footer";

function App() {
  return (
    <>
      <Toaster />
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-24">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/add-address" element={<AddAddress />} />
          <Route path="/my-orders" element={<MyOrder />} />
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;
