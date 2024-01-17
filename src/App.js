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
import FAQs from "./components/FAQs";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Returns from "./components/Returns";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div>
      <Wrapper>
        <Routes>
          <Route path="/register" Component={register} />
          <Route path="/OurStory" Component={OurStory} />
          <Route path="/technology" Component={Technology} />
          <Route path="/FAQs" Component={FAQs} />
          <Route path="/PrivacyPolicy" Component={PrivacyPolicy} />
          <Route path="/ContactUs" Component={ContactUs} />
          <Route path="/returns" Component={Returns} />
          <Route path="/login" Component={login} />
          <Route path="/checkout" Component={Checkout} />
          <Route path="/fitguide/:category" Component={fitguide} />
          <Route path="/:cattype/:category" Component={ProductList} />
          <Route path="/products/:id" Component={Products} />
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
