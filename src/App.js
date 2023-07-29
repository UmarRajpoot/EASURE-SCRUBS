import "./App.css";
import Footer from "./components/Footer";
import NavbarComp from "./components/NavbarComp";
import Wrapper from "./components/Wrapper";
import login from "./pages/account/login";
import register from "./pages/account/register";
import Collections from "./pages/collections/collections";
import Home from "./pages/home";
import Products from "./pages/products/products";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Wrapper>
        <Routes>
          <Route path="/account/register" Component={register} />
          <Route path="/account/login" Component={login} />
          <Route path="/products/:id/:category" Component={Products} />
          <Route
            path="/collections/:collection/:category?"
            Component={Collections}
          />
          <Route path="/" Component={Home} />
        </Routes>
      </Wrapper>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
