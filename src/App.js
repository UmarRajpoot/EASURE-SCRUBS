import "./App.css";
import Wrapper from "./components/Wrapper";
import login from "./pages/account/login";
import register from "./pages/account/register";
import Collection from "./pages/collections/collection";
import Home from "./pages/home";
import Products from "./pages/products/products";
import { ChakraProvider } from "@chakra-ui/react";
import Checkout from "./pages/checkout/checkout";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Wrapper>
        <Routes>
          <Route path="/checkout" Component={Checkout} />
          <Route path="/account/register" Component={register} />
          <Route path="/account/login" Component={login} />
          <Route path="/products/:id/:category" Component={Products} />
          <Route
            path="/collection/:collection/:category?"
            Component={Collection}
          />
          <Route path="/" Component={Home} />
        </Routes>
      </Wrapper>
      {/* <Footer /> */}
    </div>
  );
}

export default () => {
  return (
    <ChakraProvider>
      <App />
    </ChakraProvider>
  );
};
