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
import Technology from "./pages/Technology/Technology";
import OurStory from "./pages/OurStory/OurStory";
import fitguide from "./pages/fitguide/fitguide";
import ProductList from "./pages/ProductList/ProductList";

function App() {
  return (
    <div>
      <Wrapper>
        <Routes>
          <Route path="/checkout" Component={Checkout} />
          <Route path="/:cattype/:category" Component={ProductList} />
          <Route path="/fitguide/:category" Component={fitguide} />
          <Route path="/OurStory" Component={OurStory} />
          <Route path="/technology" Component={Technology} />
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
