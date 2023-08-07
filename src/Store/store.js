import { configureStore } from "@reduxjs/toolkit";

import DrawerReducer from "./Drawer/Reducer";
import CartItemReducers from "./Cart/Reducer";

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
  reducer: {
    DrawerOptions: DrawerReducer,
    CartOptions: CartItemReducers,
  },
});

export default store;
