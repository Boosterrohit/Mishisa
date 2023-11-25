import Footer from "./Layout/Footer/Footer";
import TopBar from "./Layout/Header/TopBar";
import Home from "./Layout/Main/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./Layout/Main/LoginForm";
import RegistrationForm from "./Layout/Main/RegistrationForm";
import Navbar from "./Layout/Header/Navbar";
import OtpCode from "./Pages/auth/OtpCode";
import Cart from "./Pages/order/Cart";
// import Header from "./Component/offer/Header";
import Offer from "./Layout/Main/Offer";
import GiftCard from "./Pages/order/GiftCard/GiftCard";
import Shopping from "./Pages/order/GiftCard/Shopping";
import ProductList from "./Pages/products/ProductList";
import HeaderSlickSlider from "./Component/Home/HeaderSlickSlider";
function App() {
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/createAccount" element={<RegistrationForm />} />
          <Route path="/otp" element={<OtpCode />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/giftcart" element={<GiftCard />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/head" element={<HeaderSlickSlider />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
