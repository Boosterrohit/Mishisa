import Footer from "./Layout/Footer/Footer";
import TopBar from "./Layout/Header/TopBar";
import Home from "./Layout/Main/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./Layout/Main/LoginForm";
import CreateAccountForm from "./Layout/Main/CreateAccountForm";
function App() {
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/createAccount" element={<CreateAccountForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
