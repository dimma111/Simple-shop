import { cartReducer } from "./cart/cart.slice";
import { configureStore, getDefaultMiddleware, Store } from "@reduxjs/toolkit";
import { productApi } from "./product/product.api";

export const store = configureStore({
  reducer: { [productApi.reducerPath]: productApi.reducer, cart: cartReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export type TypeRootState = ReturnType<typeof store.getState>;
