import { configureStore } from "@reduxjs/toolkit";

import DrawerReducer from "./Drawer/Reducer";
import CartItemReducers from "./Cart/Reducer";
import AuthReducer from "./Auth/reducer";
import ProductsReducer from "./Products/Reducer";

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
  reducer: {
    DrawerOptions: DrawerReducer,
    CartOptions: CartItemReducers,
    Auths: AuthReducer,
    ProductsReducer: ProductsReducer,
  },
});

export default store;
